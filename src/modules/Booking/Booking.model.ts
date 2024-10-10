import { model, Schema } from "mongoose";
import { IBooking } from "./Booking.interface";
import { Booking_status } from "./Booking.constants";

const bookingSchema = new Schema<IBooking>({
    date: {
        type: Date,
        required: [true, "Name is required"],
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
        required: [true, "User is required"],
    },
    facility: {
        type: Schema.Types.ObjectId,
        ref: "Facility",
        required: [true, "Location is required"],
    },
    payableAmount: {
        type: Number,
        required: [true, "Location is required"],
    },
    isBooked: {
        type: String,
        enum: Object.keys(Booking_status),
        default: Booking_status.unconfirmed,
    },
});

export const Booking = model<IBooking>("Booking", bookingSchema);
