import { Router } from "express";
import {
 getWishlist,
 addToWishlist,
 moveToCart,
 clearWishlist,
 removeFromWishlist
} from "../controller/WishlistController";
import { Middleware } from "./middleware";

const WishlistRoutes: Router = Router();

WishlistRoutes.route("/").get(Middleware(["BUYER"]), getWishlist);
WishlistRoutes.route("/add").post(Middleware(["BUYER"]), addToWishlist);
WishlistRoutes.route("/remove/:productId").delete(Middleware(["BUYER"]), removeFromWishlist);
WishlistRoutes.route("/moveToCart").post(Middleware(["BUYER"]), moveToCart);
WishlistRoutes.route("/clear").delete(Middleware(["BUYER"]), clearWishlist);

export default WishlistRoutes;
