import { Types } from "mongoose";
import { TProduct } from "../Products/Products.interface";
import { TUser } from "../user/user.interface";
import { Booking_status } from "./Orders.constants";

export interface IOrder {
    date: Date;
    startTime: string;
    endTime: string;
    user: Types.ObjectId | TUser;
    facility: Types.ObjectId | TProduct;
    // user: string;
    // facility: string;
    payableAmount: number;
    isBooked: keyof typeof Booking_status;
}
export interface IOrderRequest {
    date: Date;
    startTime: string;
    endTime: string;
    facility: Types.ObjectId | TProduct;
}
