import AppError from "../../errors/AppError";
import { payableAmount } from "../../utils/payableAmount";
import { Facility } from "../Products/Products.model";
import { User } from "../user/user.model";
import { TOrder, TOrderRequest } from "./Orders.interface";
import { Booking } from "./Orders.model";

const createBookingIntoDB = async (payload : TOrderRequest, user: string) => {
    const prouductId = await payload.prouduct
    const prouduct = await Facility.findOne({_id: prouductId});

    const getPayableAmount = await payableAmount(payload.startTime, payload.endTime, prouduct?.pricePerHour as number);
    const booking = await Booking.create({...payload, user, payableAmount: getPayableAmount});
    return booking;
};
// const updateBookingById = async (_id: string, updateObj: Partial<TOrder>) : Promise<TOrder | null> => => { //
const updateBookingById = async (_id: string, updateObj: TOrder) => {
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
const getBookingsFromDB = async (user: string, prouduct: string) => {
    const booking = await Booking.find({ user: user });
    const bookedFacilityByUser = await Facility.find({ _id: prouduct });
    const userDetails = await User.find({ _id: user });

    return { ...booking, prouduct: bookedFacilityByUser, user: userDetails };
    // return { booking };
};
export const BookingServices = {
    createBookingIntoDB,
    updateBookingById,
    deleteSoftBookingById,
    getBookingByIdFromDB,
    getBookingsFromDB,
};
