import { Router } from "express";
import {
buyNow,
getUserOrders,
placeOrder
} from "../controller/OrderController";
import { Middleware } from "./middleware";

const OrderRoutes: Router = Router();

OrderRoutes.route("/").get(Middleware(["BUYER"]), getUserOrders);
OrderRoutes.route("/placeOrder").post(Middleware(["BUYER"]), placeOrder);
OrderRoutes.route("/buyNow").post(Middleware(["BUYER"]), buyNow);


export default OrderRoutes;
