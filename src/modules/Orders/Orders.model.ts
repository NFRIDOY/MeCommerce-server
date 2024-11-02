import { model, Schema } from "mongoose";
import { TOrder } from "./Orders.interface";
import { Order_status } from "./Orders.constants";

const bookingSchema = new Schema<TOrder>({
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
        enum: Object.keys(Order_status),
        default: Order_status.confirmed,
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

export const Booking = model<TOrder>("Booking", bookingSchema);
