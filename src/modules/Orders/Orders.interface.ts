import { Types } from "mongoose";
import { IProduct } from "../Products/Products.interface";
import { IUser } from "../user/user.interface";
import { Booking_status } from "./Orders.constants";

export interface IOrder {
    date: Date;
    startTime: string;
    endTime: string;
    user: Types.ObjectId | IUser;
    facility: Types.ObjectId | IProduct;
    // user: string;
    // facility: string;
    payableAmount: number;
    isBooked: keyof typeof Booking_status;
}
export interface IOrderRequest {
    date: Date;
    startTime: string;
    endTime: string;
    facility: Types.ObjectId | IProduct;
}
