import express from 'express';
import { facilityControllers } from './facility.controller';
import { auth } from '../../middlewares/auth';

const router = express.Router();
/** Admin Only */
/** POST /facility */
router.post("/", auth("admin"), facilityControllers.createFacility);
// router.post("/", facilityControllers.createFacility);
/** PUT /api/facility/:id */
// router.put("/facility/:id", facilityControllers.updateFacilityById);
/** Soft DELETE /api/facility/:id */
// router.delete("/facility/:id", facilityControllers.deleteFacilityById);
/** GET All /api/facility */
router.get("/", facilityControllers.getFacilitys);
/** GET Check Availability /api/check-availability */
/**
 * Example
 * GET /api/check-availability?date=2024-06-15
 */
// router.get("/check-availability", facilityControllers.checkAvailabilityByDateQuery);

export const FacilityRouters = router;