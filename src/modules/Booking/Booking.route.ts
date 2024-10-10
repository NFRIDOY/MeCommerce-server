import express from 'express';

const router = express.Router();
/** User Only */
/** POST /api/facility 8. Create a Booking (User Only) */
router.post("/bookings", bookingControllers.createBookings);
/** GET /api/bookings/user */
// router.get("/bookings/user", bookingControllers.getAllFacility);
// /** DELETE /api/bookings/:id */
// router.delete("/bookings/:id", bookingControllers.getAllFacility);

// /** Admin Only */
// /** GET All /api/bookings */
// router.get("/bookings", bookingControllers.getAllBookings);