import AppError from "../../errors/AppError";
import { payableAmount } from "../../utils/payableAmount";
import { Facility } from "../Facility/facility.model";
import { User } from "../user/user.model";
import { IBooking, IBookingRequest } from "./Booking.interface";
import { Booking } from "./Booking.model";

const createBookingIntoDB = async (payload : IBookingRequest, user: string) => {
    const facilityId = await payload.facility
    const facility = await Facility.findOne({_id: facilityId});

    const getPayableAmount = await payableAmount(payload.startTime, payload.endTime, facility?.pricePerHour as number);
    const booking = await Booking.create({...payload, user, payableAmount: getPayableAmount});
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
