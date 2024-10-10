import { model, Schema } from "mongoose";
import { IBooking } from "./Booking.interface";
import { Booking_status } from "./Booking.constants";

const bookingSchema = new Schema<IBooking>({
    date: {
        type: Date,
        required: [true, "Date is required"],
    },
    startTime: {
        type: String,
        required: [true, "Start Time is required"],
    },
    endTime: {
        type: String,
        required: [true, "End Time is required"],
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User ID is required"],
    },
    facility: {
        type: Schema.Types.ObjectId,
        ref: "Facility",
        required: [true, "Facility ID is required"],
    },
    payableAmount: {
        type: Number,
        required: [true, "Payable Amount is required"],
    },
    isBooked: {
        type: String,
        enum: Object.keys(Booking_status),
        default: Booking_status.confirmed,
    },
});

export const Booking = model<IBooking>("Booking", bookingSchema);
