import { Router } from "express" 
import AuthRouter from "./authRoutes";
import ProductRoutes from "./productRoutes";
import CartRoutes from "./cartRoutes";
import WishlistRoutes from "./wishlistRoutes";
import OrderRoutes from "./orderRoutes";
const routes:Router = Router();

routes.use('/auth',AuthRouter)
routes.use('/product',ProductRoutes)
routes.use('/cart',CartRoutes)
routes.use('/wishlist',WishlistRoutes)
routes.use('/order',OrderRoutes)


export default routes;


