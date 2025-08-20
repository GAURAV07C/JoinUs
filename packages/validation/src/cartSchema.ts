import { z } from "zod";

export const CartSchema = z.object({
  productId: z.string().uuid(),
  quantity: z.number().min(1).optional().default(1),
});

export type CartInput = z.infer<typeof CartSchema>;


export const WishlistItemSchema = z.object({
  productId: z.string().uuid(),
});

export type WishlistItemInput = z.infer<typeof WishlistItemSchema>;