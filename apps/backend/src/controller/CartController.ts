import { Request, Response } from "express";
import { prisma, redis } from "@joinUs/database";
import { CartSchema } from "@joinUs/validation/cartTypes";

export const getCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      res.status(401).json({ success: false, message: "Unauthorized" });
      return;
    }

    const cacheKey = `cart:user:${userId}`;
    const cachedCart = await redis.get(cacheKey);

    if (cachedCart) {
      res.json({
        success: true,
        fromCache: true,
        data: JSON.parse(cachedCart),
      });
      return;
    }

    const cartItems = await prisma.cart.findMany({
      where: { userId },
      include: {
        product: {
          include: {
            ProductVariant: true,
            ProductImage: {
              select: {
                url: true,
              },
            },
            seller: {
              select: {
                user: {
                  select: {
                    name: true,
                    Address: true,
                  },
                },
              },
            },
          },
        },
        user: true,
      },
    });

    const cartData = cartItems.map((item) => {
      const variant = item.product.ProductVariant?.[0]; // Choose logic if multiple
      const images = item.product.ProductImage?.[0];
      const artist = item.product.seller.user.name;
      const location = item.product.seller.user.Address;
      return {
        id: item.id,
        quantity: item.quantity,
        product: {
          id: item.product.id,
          name: item.product.name,
          description: item.product.description,
          images: images,
          price: variant?.price || 0,
          stock: variant?.stock || 0,
          artisan: artist,
          location: location,
        },
      };
    });

    const total = cartData.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    const payload = {
      items: cartData,
      total,
    };

    await redis.set(cacheKey, JSON.stringify(payload), "EX", 60); // cache for 1 min

    res.json({
      success: true,
      fromCache: false,
      data: payload,
    });
  } catch (error) {
    console.error("getCart error:", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

export const addToCart = async (req: Request, res: Response): Promise<void> => {
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
      res.status(400).json({ success: false, message: "Invalid request" });
      return;
    }
    const existingItem = await prisma.cart.findFirst({
      where: { userId, productId },
    });

    if (existingItem) {
      await prisma.cart.update({
        where: { id: existingItem.id },
        data: { quantity: existingItem.quantity + quantity },
      });
    } else {
      await prisma.cart.create({
        data: {
          userId,
          productId,
          quantity,
        },
      });
    }

    // Invalidate cache
    await redis.del(`cart:user:${userId}`);

    res.json({ success: true, message: "Cart updated" });
  } catch (err) {
    console.error("addToCart error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const updateCartItemQuantity = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const validateData = CartSchema.parse(req.body);

    if (!validateData) {
      res.status(400).json({
        error: "Invalid input data",
        issues: "issue in cart",
      });
      return;
    }
    const userId = req.user?.id;
    const { productId, quantity } = validateData;

    if (!userId || !productId || quantity < 1) {
      res.status(400).json({ success: false, message: "Invalid request" });
      return;
    }

    await prisma.cart.updateMany({
      where: { userId, productId },
      data: { quantity },
    });

    await redis.del(`cart:user:${userId}`);

    res.json({ success: true, message: "Quantity updated" });
  } catch (err) {
    console.error("updateCartItemQuantity error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const removeFromCart = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.id;
    const { productId } = req.params;

    if (!userId || !productId) {
      res.status(400).json({ success: false, message: "Invalid request" });
      return;
    }

    await prisma.cart.deleteMany({
      where: { userId, productId },
    });

    await redis.del(`cart:user:${userId}`);

    res.json({ success: true, message: "Item removed" });
  } catch (err) {
    console.error("removeFromCart error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const clearCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      res.status(401).json({ success: false, message: "Unauthorized" });
      return;
    }

    await prisma.cart.deleteMany({ where: { userId } });

    await redis.del(`cart:user:${userId}`);

    res.json({ success: true, message: "Cart cleared" });
  } catch (err) {
    console.error("clearCart error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
