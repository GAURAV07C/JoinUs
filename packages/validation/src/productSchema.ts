import { z } from "zod";

// Enum for ProductStatus
export const ProductStatusEnum = z.enum(["PENDING", "APPROVED", "REJECTED"]);

// ✅ Product Variant Schema
const productVariantSchema = z.object({
  price: z.number().min(0, "Price must be a positive number"),
  stock: z.number().nullable(), // Nullable in case of made to order
  isMadeToOrder: z.boolean().optional().default(false),
});

// ✅ Main Product Schema
export const createProductSchema = z.object({
  name: z.string().min(3, "Product name must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  status: ProductStatusEnum.optional().default("PENDING"),
  sellerId: z.string().uuid("Invalid seller ID"),
  imageUrl: z.union([
    z.string().min(1, "Image URL is required"), // For single image (string)
    z.array(z.string().min(1, "Image URL is required")), // Or multiple images
  ]),

  categoryId: z.string().uuid("Invalid category ID").optional(),
  variants: z
    .array(productVariantSchema)
    .min(1, "At least one variant is required"),
});

export const CategoryCreateSchema = z.object({
  name: z.string().min(1, "Category name is required"),
});

const updateVariantSchema = z.object({
  id: z.string().uuid().optional(), // variant ID agar existing ho
  price: z.number().min(0, "Price must be a positive number").optional(),
  stock: z.number().nullable().optional(),
  isMadeToOrder: z.boolean().optional(),
});

export const updateProductSchema = z.object({
  name: z
    .string()
    .min(3, "Product name must be at least 3 characters")
    .optional(),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .optional(),
  imageUrl: z.union([
    z.string().min(1, "Image URL is required"), // For single image (string)
    z.array(z.string().min(1, "Image URL is required")), // Or multiple images
  ]),
  status: ProductStatusEnum.optional(),
  categoryId: z.string().uuid("Invalid category ID").optional(),
  variants: z.array(updateVariantSchema).optional(), // Optional for partial variant update
});