import { RequestHandler } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { BookingServices } from "./Booking.service";

const createBooking: RequestHandler = catchAsync(async (req, res) => {
    const result = await BookingServices.createBookingIntoDB(req.body);

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
        message: `Data get successfully!`,
        data: result,
    });
});
/** GET Bookings */
const getBookings: RequestHandler = catchAsync(async (req, res) => {
    const result = await BookingServices.getBookingsFromDB();

    res.status(200).json({
        success: true,
        message: `Data get successfully!`,
        data: result,
    });
});

export const bookingControllers = {
    createBooking,
    updateBookingById,
    deleteBookingById,
    getBookingById,
    getBookings,
};
