import { RequestHandler } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { BookingServices } from "./Orders.service";
import { authGetUser } from "../auth/authGetUser.util";

const createBooking: RequestHandler = catchAsync(async (req, res) => {
    const accessToken = req.headers.authorization;
    const user = await authGetUser(accessToken as string);
    const result = await BookingServices.createBookingIntoDB(req.body, user);

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: `Booking added successfully`,
        data: result,
    });
});

const updateBookingById: RequestHandler = catchAsync(async (req, res) => {
    const result = await BookingServices.updateBookingById(
        req.params.id,
        req.body
    );

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: `Booking updated successfully`,
        data: result,
    });
});
const deleteBookingById: RequestHandler = catchAsync(async (req, res) => {
    const result = await BookingServices.deleteSoftBookingById(req.params.id);

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: `Booking deleted successfully`,
        data: result,
    });
});
/** GET A Bookings By ID */
const getBookingById: RequestHandler = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await BookingServices.getBookingByIdFromDB(id);

    res.status(200).json({
        success: true,
        message: `Bookings retrieved successfully`,
        data: result,
    });
});
// /** GET user Bookings */
// const getUserBookings: RequestHandler = catchAsync(async (req, res) => {
//     const result = await BookingServices.getBookingsFromDB();

//     res.status(200).json({
//         success: true,
//         message: `Bookings retrieved successfully`,
//         data: result,
//     });
// });
/** GET Bookings */
const getBookings: RequestHandler = catchAsync(async (req, res) => {
    const accessToken = req.headers.authorization;
    const user = await authGetUser(accessToken as string);
    const { prouduct } = req.body;
    const result = await BookingServices.getBookingsFromDB(user, prouduct);

    res.status(200).json({
        success: true,
        message: `Bookings retrieved successfully`,
        data: { ...result },
    });
});

export const bookingControllers = {
    createBooking,
    updateBookingById,
    deleteBookingById,
    getBookingById,
    // getUserBookings,
    getBookings,
};
