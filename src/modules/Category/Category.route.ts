import express from "express";
import { auth } from "../../middlewares/auth";
import { categoryControllers } from './Category.controller';

const router = express.Router();
//** Admin Only */
/** POST /category */
router.post("/", auth("admin"), categoryControllers.createCategory);
// router.post("/", categoryControllers.createCategory);
/** PUT /api/category/:id */
router.put("/:id", auth("admin"), categoryControllers.updateCategoryById);
/** Soft DELETE /api/category/:id */
router.delete("/:id", auth("admin"), categoryControllers.deleteCategoryById);

//*** Any One */
/** GET A Category By ID */
router.get(
    "/:id",
    // auth("admin", "user"),
    categoryControllers.getCategoryById
);
/** GET All /api/category */
router.get("/", categoryControllers.getCategory);
/** GET Check Availability /api/check-availability */
/**
 * Example
 * GET /api/check-availability?date=2024-06-15
 */
// router.get("/check-availability", categoryControllers.checkAvailabilityByDateQuery);

export const CategoryRouters = router;
