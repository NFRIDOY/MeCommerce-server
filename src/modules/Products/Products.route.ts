import express from "express";
import { productsControllers } from "./Products.controller";


const router = express.Router();
//** Admin Only */
/** POST /product */
// TODO: ADD AUTH later
//! Testing 
router.post(
    "/",
    // auth("admin"),
    productsControllers.createProduct
);

// router.post("/", productsControllers.createProduct);
/** PUT /api/product/:id */
router.put(
    "/:id",
    // auth("admin"),
    productsControllers.updateProductById
);

/** Soft DELETE /api/product/:id */
router.delete(
    "/:id",
    // auth("admin"),
    productsControllers.deleteProductById
);

//*** everyone */
/** GET A Product By ID */
router.get(
    "/:id",
    // auth("admin", "user"),
    productsControllers.getProductById
);
/** GET All /api/product */
router.get("/", productsControllers.getProducts);
/** GET Check Availability /api/check-availability */
/**
 * Example
 * GET /api/check-availability?date=2024-06-15
 */
// router.get("/check-availability", productsControllers.checkAvailabilityByDateQuery);

export const ProductsRouters = router;
