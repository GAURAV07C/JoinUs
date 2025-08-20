import { Request, Response } from "express";
import { prisma, redis } from "@joinUs/database";
import { WishlistItemSchema } from "@joinUs/validation/cartTypes";

export const getWishlist = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      res.status(401).json({ success: false, message: "Unauthorized" });
      return;
    }

    const cacheKey = `wishlist:user:${userId}`;
    const cached = await redis.get(cacheKey);

    if (cached) {
      res.json({
        success: true,
        fromCache: true,
        data: JSON.parse(cached),
      });
      return;
    }

    const wishlistItems = await prisma.wishlist.findMany({
      where: { userId },
      include: {
        product: {
          include: {
            ProductVariant: true,
            ProductImage: true,
          },
        },
      },
    });

    await redis.set(cacheKey, JSON.stringify(wishlistItems), "EX", 60);

    res.json({
      success: true,
      fromCache: false,
      data: wishlistItems,
    });
    return;
  } catch (err) {
    console.error("getWishlist error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const addToWishlist = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const validateData = WishlistItemSchema.safeParse(req.body);
    if (!validateData.success) {
      res.status(400).json({
        error: "Invalid input data",
        issues: validateData.error.issues,
      });
      return;
    }
    const { productId } = validateData.data;

    const userId = req.user?.id;

    if (!userId || !productId) {
      res.status(400).json({ success: false, message: "Missing fields" });
      return;
    }

    await prisma.wishlist.upsert({
      where: {
        userId_productId: { userId, productId },
      },
      create: { userId, productId },
      update: {},
    });

    await redis.del(`wishlist:user:${userId}`);

    res.json({ success: true, message: "Item added to wishlist" });
  } catch (err) {
    console.error("addToWishlist error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const removeFromWishlist = async (
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

    await prisma.wishlist.deleteMany({
      where: { userId, productId },
    });

    await redis.del(`wishlist:user:${userId}`);

    res.json({ success: true, message: "Item removed from wishlist" });
  } catch (err) {
    console.error("removeFromWishlist error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const moveToCart = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const validateData = WishlistItemSchema.safeParse(req.body);
    if (!validateData.success) {
      res.status(400).json({
        error: "Invalid input data",
        issues: validateData.error.issues,
      });
      return;
    }
    const userId = req.user?.id;
    const { productId } = req.body;

    if (!userId || !productId) {
      res.status(400).json({ success: false, message: "Invalid request" });
      return;
    }

    // 1. Remove from wishlist
    await prisma.wishlist.deleteMany({
      where: { userId, productId },
    });

    // 2. Check if item is already in cart
    const existingCartItem = await prisma.cart.findFirst({
      where: { userId, productId },
    });

    if (existingCartItem) {
      await prisma.cart.update({
        where: { id: existingCartItem.id },
        data: { quantity: existingCartItem.quantity + 1 },
      });
    } else {
      await prisma.cart.create({
        data: { userId, productId, quantity: 1 },
      });
    }

    // 3. Invalidate both caches
    await redis.del(`wishlist:user:${userId}`);
    await redis.del(`cart:user:${userId}`);

    res.json({ success: true, message: "Moved to cart" });
  } catch (err) {
    console.error("moveToCart error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const clearWishlist = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      res.status(401).json({ success: false, message: "Unauthorized" });
      return;
    }

    await prisma.wishlist.deleteMany({ where: { userId } });

    await redis.del(`Wishlist:user:${userId}`);

    res.json({ success: true, message: "Wishlist cleared" });
  } catch (err) {
    console.error("clearWishlitst error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
