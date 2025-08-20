import { Router } from "express";
import {
  getAllProducts,
  getProductByProductId,
  getAllProductByCategory,
  getProductsGroupedByCategory
} from "../controller/ProdutController";

const ProductRoutes: Router = Router();

ProductRoutes.get("/", getAllProducts);
ProductRoutes.get("/:productId", getProductByProductId);
ProductRoutes.get("/category/:categoryId", getAllProductByCategory);
ProductRoutes.get("/categories/groupedbyProduct", getProductsGroupedByCategory);

export default ProductRoutes;
