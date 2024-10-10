import express from 'express';
import { bookingControllers } from './Booking.controller';
import { auth } from '../../middlewares/auth';

const router = express.Router();
/** User Only */
/** POST /api/booking 8. Create a Booking (User Only) */
router.post("/", auth("user"), bookingControllers.createBooking);
//! testing 
// router.post("/", bookingControllers.createBooking);
/** GET /api/bookings/user */
router.get("/", bookingControllers.getBookings);
// /** DELETE /api/bookings/:id */
// router.delete("/bookings/:id", bookingControllers.getAllFacility);

// /** Admin Only */
// /** GET All /api/bookings */
// router.get("/bookings", bookingControllers.getAllBookings);

export const BookingRouters = router;