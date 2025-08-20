import { Router } from "express";
import {
  getCart,
  addToCart,
  clearCart,
  removeFromCart,
  updateCartItemQuantity,
} from "../controller/CartController";
import { Middleware } from "./middleware";

const CartRoutes: Router = Router();

CartRoutes.route("/").get(Middleware(["BUYER"]), getCart);
CartRoutes.route("/addCart").post(Middleware(["BUYER"]), addToCart);
CartRoutes.route("/update").put(Middleware(["BUYER"]), updateCartItemQuantity);
CartRoutes.route("/remove/:productId").delete(Middleware(["BUYER"]), removeFromCart);
CartRoutes.route("/clear").delete(Middleware(["BUYER"]), clearCart);

export default CartRoutes;
