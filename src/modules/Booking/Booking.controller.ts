import { catchAsync } from "../../utils/catchAsync";

const createBooking: RequestHandler = catchAsync(async (req, res) => {
    const result = await BookingServices.createBookingIntoDB(req.body);

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: `Booking added successfully`,
        data: result,
    });
});