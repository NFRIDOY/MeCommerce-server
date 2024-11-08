import { model, Schema } from "mongoose";
import { TOrder } from "./Orders.interface";
import { Order_status } from "./Orders.constants";
import { TProduct } from "../Products/Products.interface";
import { productSchemaObject } from "../Products/Products.model";

interface TOrderedProduct extends TProduct {
    quantity: number;
}

const orderProductSchema = new Schema({
    ...productSchemaObject,
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
    },
});

export const OrderProduct = model<TOrderedProduct>(
    "OrderedProduct",
    orderProductSchema
);

const bookingSchema = new Schema<TOrder>({
    date: {
        type: Date,
        required: [true, "Date is required"],
    },
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: "User",
    //     required: [true, "User ID is required"],
    // },
    name: {
        type: String,
        required: [true, "name is required"],
    },
    phone: {
        type: String,
        required: [true, "phone is required"],
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "OrderProduct",
            required: [true, "Product ID is required"],
        },
    ],
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
