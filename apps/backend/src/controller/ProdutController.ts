import { prisma } from "@joinUs/database";
import { redis } from "@joinUs/database";

import { Request, Response } from "express";

export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  const cacheKey = "products";
  const cachedData = await redis.get(cacheKey);

  if (cachedData) {
    res.header("Content-Type", "application/json");
    res.end(JSON.stringify(JSON.parse(cachedData)));
    return;
  }

  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      ProductVariant: {
        select: {
          price: true,
        },
      },
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
      _count: {
        select: {
          Review: true,
        },
      },
      Review: {
        select: {
          rating: true,
          comment: true,
          user: {
            select: {
              name: true,
              email: true,
            },
          },
        },
      },
    },
  });

  await redis.set(cacheKey, JSON.stringify(products), "EX", 60); // Cache for 60 sec

  res.json(products);
};

export const getProductByProductId = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { productId } = req.params;

  if (!productId) {
    res.status(400).json({ message: "Product ID is required" });
    return;
  }

  const cacheKey = `product:${productId}`;
  const cachedProduct = await redis.get(cacheKey);

  if (cachedProduct) {
    res.header("Content-Type", "application/json");
    res.end(JSON.stringify(JSON.parse(cachedProduct))); // Serve from Redis Cache
    return;
  }

  try {
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
      include: {
        ProductVariant: true, // Include variants if needed
        ProductImage: true,
      },
    });

    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    await redis.set(cacheKey, JSON.stringify(product), "EX", 60); // Cache for 60 sec
    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllProductsFilter = async (
  req: Request,
  res: Response
): Promise<void> => {
  const {
    name,
    categoryId,
    minPrice,
    maxPrice,
    minStock,
    maxStock,
    page = "1",
    limit = "10",
  } = req.query;

  const pageNumber = parseInt(page as string, 10);
  const limitNumber = parseInt(limit as string, 10);
  const offset = (pageNumber - 1) * limitNumber;

  // Generate dynamic cache key
  const cacheKey = `products:${name || ""}:${categoryId || ""}:${minPrice || ""}:${maxPrice || ""}:${minStock || ""}:${maxStock || ""}:${page}:${limit}`;
  const cached = await redis.get(cacheKey);

  if (cached) {
    res.header("Content-Type", "application/json");
    res.end(cached); // Send cached response
    return;
  }

  const products = await prisma.product.findMany({
    where: {
      name: name
        ? { contains: name as string, mode: "insensitive" }
        : undefined,
      categoryId: categoryId as string | undefined,
      ProductVariant: {
        some: {
          price: {
            gte: minPrice ? parseFloat(minPrice as string) : undefined,
            lte: maxPrice ? parseFloat(maxPrice as string) : undefined,
          },
          stock: {
            gte: minStock ? parseInt(minStock as string) : undefined,
            lte: maxStock ? parseInt(maxStock as string) : undefined,
          },
        },
      },
    },
    skip: offset,
    take: limitNumber,
    include: { ProductVariant: true },
  });

  await redis.set(cacheKey, JSON.stringify(products), "EX", 60); // Cache for 60 sec
  res.json(products);
};

export const getAllProductByCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { categoryId } = req.params;
    const take = parseInt(req.query.take as string) || 10;
    const skip = parseInt(req.query.skip as string) || 0;

    if (!categoryId) {
      res.status(400).json({
        success: false,
        message: "Category ID is required",
      });
      return;
    }

    const products = await prisma.product.findMany({
      where: { categoryId },
      take,
      skip,
      select: {
        id: true,
        name: true,
        description: true,
        status: true,
        categoryId: true,
        ProductImage: {
          select: {
            url: true,
          },
        },
        ProductVariant: {
          select: {
            id: true,
            price: true,
            stock: true,
            isMadeToOrder: true,
          },
        },
        seller: {
          select: {
            id: true,
            user: { select: { id: true, email: true, name: true } },
          },
        },
        Category: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    res.status(200).json({
      success: true,
      message: `Products fetched successfully for category: ${categoryId}`,
      data: products,
    });
  } catch (error) {
    console.error("Error fetching products by category:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getProductsGroupedByCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Step 1: Get all categories
    const categories = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    // Step 2: For each category, fetch products
    const groupedData = await Promise.all(
      categories.map(async (category) => {
        const products = await prisma.product.findMany({
          where: {
            categoryId: category.id,
          },
          include: {
            ProductImage: true,
            ProductVariant: true,
            seller: true,
          },
        });

        return {
          category,
          products,
        };
      })
    );

    res.status(200).json({
      success: true,
      data: groupedData,
    });
  } catch (error) {
    console.error("Error grouping products:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
