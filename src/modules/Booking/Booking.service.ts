import AppError from "../../errors/AppError";
import { IBooking } from "./Booking.interface";
import { Booking } from "./Booking.model";

const createBookingIntoDB = async (payload: IBooking) => {
    const booking = await Booking.create(payload);
    return booking;
};
// const updateBookingById = async (_id: string, updateObj: Partial<IBooking>) : Promise<IBooking | null> => => { //
const updateBookingById = async (_id: string, updateObj: IBooking) => {
    const bookingBefore = await Booking.findOneAndUpdate({ _id }, updateObj);

    if (!bookingBefore) throw new AppError(500, "Booking update failed");

    const booking = await Booking.findOne({ _id });

    return booking;
};
const deleteSoftBookingById = async (_id: string) => {
    const booking = await Booking.findOneAndUpdate(
        { _id },
        { isDeleted: true }
    );
    return booking;
};
const getBookingByIdFromDB = async (_id: string) => {
    const booking = await Booking.findOne({ _id });
    return booking;
};
const getBookingsFromDB = async () => {
    const booking = await Booking.find();
    return booking;
};
export const BookingServices = {
    createBookingIntoDB,
    updateBookingById,
    deleteSoftBookingById,
    getBookingByIdFromDB,
    getBookingsFromDB,
};
