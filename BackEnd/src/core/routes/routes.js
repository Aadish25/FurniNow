import express from "express";
import signup from "../controllers/Authentication/signup/controllers.js";
import login from "../controllers/Authentication/login/controllers.js";
import Middleware from "../middleware/middleware.js"
import Controllers_Products from "../controllers/products/controllers.js"
import Controllers_billing from "../controllers/billing/billing.js"
import Controllers_Cart from "../controllers/cart/controller.js"
import Controllers_Contact from "../controllers/contact/controller.js"
const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.post("/product",Middleware,Controllers_Products.createProduct);
router.put("/product/:_id",Middleware,Controllers_Products.editProduct);
router.delete("/product/:_id",Middleware,Controllers_Products.deleteProduct);
router.get("/product/:_id",Middleware,Controllers_Products.getProduct);
router.get("/products",Middleware,Controllers_Products.getProducts);
router.post("/cart",Middleware,Controllers_Cart.addToCart);
router.get("/cart",Middleware,Controllers_Cart.getCart);
router.put("/cart",Middleware,Controllers_Cart.editCart);
router.delete("/cart",Middleware,Controllers_Cart.deleteCart);
router.post("/bill",Middleware,Controllers_billing.details);
router.post("/contact",Middleware,Controllers_Contact.contact);
export default router;
