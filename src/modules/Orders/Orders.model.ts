import { model, Schema } from "mongoose";
import { IOrder } from "./Orders.interface";
import { Booking_status } from "./Orders.constants";

const bookingSchema = new Schema<IOrder>({
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
        // required: [true, "isBooked status is required"],
    },
});

// bookingSchema.pre("save", async function (next) {
//     // const user = this;

// const getPayableAmount = payableAmount(this.startTime, this.endTime, this.)

//     }
//     );

//     next();
// });

export const Booking = model<IOrder>("Booking", bookingSchema);
