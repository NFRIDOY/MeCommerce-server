import AppError from "../../errors/AppError";
import { payableAmount } from "../../utils/payableAmount";
import { Facility } from "../Products/Products.model";
import { User } from "../user/user.model";
import { IOrder, IOrderRequest } from "./Orders.interface";
import { Booking } from "./Orders.model";

const createBookingIntoDB = async (payload : IOrderRequest, user: string) => {
    const facilityId = await payload.facility
    const facility = await Facility.findOne({_id: facilityId});

    const getPayableAmount = await payableAmount(payload.startTime, payload.endTime, facility?.pricePerHour as number);
    const booking = await Booking.create({...payload, user, payableAmount: getPayableAmount});
    return booking;
};
// const updateBookingById = async (_id: string, updateObj: Partial<IOrder>) : Promise<IOrder | null> => => { //
const updateBookingById = async (_id: string, updateObj: IOrder) => {
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
const getBookingsFromDB = async (user: string, facility: string) => {
    const booking = await Booking.find({ user: user });
    const bookedFacilityByUser = await Facility.find({ _id: facility });
    const userDetails = await User.find({ _id: user });

    return { ...booking, facility: bookedFacilityByUser, user: userDetails };
    // return { booking };
};
export const BookingServices = {
    createBookingIntoDB,
    updateBookingById,
    deleteSoftBookingById,
    getBookingByIdFromDB,
    getBookingsFromDB,
};
