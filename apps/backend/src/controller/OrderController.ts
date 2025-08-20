import { Request, Response } from "express";
import { prisma, redis } from "@joinUs/database";
import { CartSchema } from "@joinUs/validation/cartTypes";
export const placeOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ success: false, message: "Unauthorized" });
      return;
    }

    const cartItems = await prisma.cart.findMany({
      where: { userId },
      include: {
        product: {
          include: {
            ProductVariant: true,
            seller: {
              select: { id: true, user: { select: { id: true, name: true } } },
            },
          },
        },
      },
    });

    if (!cartItems.length) {
      res.status(400).json({ success: false, message: "Cart is empty" });
      return;
    }

    let totalAmount = 0;
    const orderItems: any[] = [];
    const stockUpdates = [];

    for (const item of cartItems) {
      const variant = item.product.ProductVariant[0];

      if (!variant) {
        res.status(400).json({
          success: false,
          message: `Variant not found for product ${item.product.name}`,
        });
        return;
      }

      const isMadeToOrder = variant.isMadeToOrder;

      if (
        !isMadeToOrder &&
        (variant.stock === null || variant.stock < item.quantity)
      ) {
        res.status(400).json({
          success: false,
          message: `Insufficient stock for product ${item.product.name}`,
        });
        return;
      }

      if (!isMadeToOrder) {
        stockUpdates.push(
          prisma.productVariant.update({
            where: { id: variant.id },
            data: { stock: { decrement: item.quantity } },
          })
        );
      }

      orderItems.push({
        productId: item.productId,
        quantity: item.quantity,
        price: variant.price,
        sellerId: item.product.seller.id,
        variantId: variant.id,
      });

      totalAmount += variant.price * item.quantity;
    }

    const transactionResult = await prisma.$transaction([
      prisma.order.create({
        data: {
          buyerId: userId,
          totalAmount,
          orderItems: {
            createMany: {
              data: orderItems.map(({ variantId, ...rest }) => rest),
            },
          },
        },
        include: { orderItems: true },
      }),
      ...orderItems.map((item) =>
        prisma.productVariant.update({
          where: { id: item.variantId },
          data: { stock: { decrement: item.quantity } },
        })
      ),
      prisma.cart.deleteMany({ where: { userId } }),
    ]);

    const order = transactionResult[0];

    // 🧹 Invalidate related Redis cache
    await Promise.all([
      redis.del(`cart:user:${userId}`), // Invalidate cart
      redis.del(`orders:user:${userId}`), // Invalidate orders
    ]);

    res.json({
      success: true,
      message: "Order placed successfully",
      data: order,
    });
  } catch (err) {
    console.error("placeOrder error:", err);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

export const getUserOrders = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(401).json({ success: false, message: "Unauthorized" });
      return;
    }

    const redisKey = `orders:user:${userId}`;

    // 1. Check Redis cache
    const cachedOrders = await redis.get(redisKey);
    if (cachedOrders) {
      res.json({ success: true, data: JSON.parse(cachedOrders) });
      return;
    }

    // 2. If not in cache, fetch from DB
    const orders = await prisma.order.findMany({
      where: { buyerId: userId },
      include: {
        orderItems: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                ProductVariant: {
                  take: 1,
                  select: { price: true },
                },
              },
            },
            seller: {
              select: {
                id: true,
                user: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
              },
            },
          },
        },
        payment: true,
        deliveryOrder: true,
      },
      orderBy: { createdAt: "desc" },
    });

    // 3. Store in Redis for next time (set expiry to 5 mins)
    await redis.set(redisKey, JSON.stringify(orders), "EX", 300); // 300 seconds = 5 mins

    res.json({ success: true, data: orders });
  } catch (err) {
    console.error("getUserOrders error:", err);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

export const buyNow = async (req: Request, res: Response): Promise<void> => {
  try {
    const validateData = CartSchema.parse(req.body);

    if (!validateData) {
      res.status(400).json({
        error: "Invalid input data",
        issues: CartSchema,
      });
      return;
    }
    const { productId, quantity } = validateData;

    const userId = req.user?.id;
    if (!userId || !productId || quantity < 1) {
      res.status(400).json({ success: false, message: "Invalid input" });
      return;
    }

    const product = await prisma.product.findUnique({
      where: { id: productId },
      select: {
        id: true,
        ProductVariant: {
          select: { id: true, price: true, stock: true, isMadeToOrder: true },
          take: 1,
        },
        seller: {
          select: { id: true, user: { select: { id: true, name: true } } },
        },
      },
    });

    if (!product || !product.ProductVariant[0]) {
      res
        .status(404)
        .json({ success: false, message: "Product or variant not found" });
      return;
    }

    const variant = product.ProductVariant[0];
    const isMadeToOrder = variant.isMadeToOrder;

    if (
      !isMadeToOrder &&
      (variant.stock === null || variant.stock < quantity)
    ) {
      res.status(400).json({ success: false, message: "Insufficient stock" });
      return;
    }

    const totalPrice = variant.price * quantity;

    const transactionResult = await prisma.$transaction([
      prisma.order.create({
        data: {
          buyerId: userId,
          totalAmount: totalPrice,
          orderItems: {
            create: {
              productId: product.id,
              quantity,
              price: variant.price,
              sellerId: product.seller.id,
            },
          },
        },
        include: { orderItems: true },
      }),
      prisma.productVariant.update({
        where: { id: variant.id },
        data: { stock: { decrement: quantity } },
      }),
    ]);

    const order = transactionResult[0];

    // 🧹 Invalidate user's orders cache in Redis
    await redis.del(`orders:user:${userId}`);

    res.status(200).json({
      success: true,
      message: "Order placed successfully",
      data: order,
    });
  } catch (error) {
    console.error("buyNow error:", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
