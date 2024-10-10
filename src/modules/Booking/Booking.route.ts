import express from "express";
import { bookingControllers } from "./Booking.controller";
import { auth } from "../../middlewares/auth";

const router = express.Router();
/** User Only */
/** POST /api/booking 8. Create a Booking (User Only) */
router.post("/", auth("user"), bookingControllers.createBooking);
// router.post("/", bookingControllers.createBooking);

// /** DELETE /api/bookings/:id */
// router.delete("/bookings/:id", bookingControllers.getAllFacility);

// /** User Only */
// /** GET /api/bookings/user */
//! testing Add auth("user")
router.get("/user", bookingControllers.getBookings);
// router.get("/user", bookingControllers.getUserBookings);

/** Admin Only */
/** GET All /api/bookings */
//! testing Add auth("admin")
router.get("/", auth("admin"), bookingControllers.getBookings);

export const BookingRouters = router;
