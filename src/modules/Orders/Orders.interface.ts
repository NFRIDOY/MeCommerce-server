import { Types } from "mongoose";
import { TProduct } from "../Products/Products.interface";
import { TUser } from "../user/user.interface";
import { Order_status } from "./Orders.constants";

export interface TOrder {
    date: Date;
    startTime: string;
    endTime: string;
    user: Types.ObjectId | TUser;
    facility: Types.ObjectId | TProduct;
    // user: string;
    // facility: string;
    payableAmount: number;
    isBooked: keyof typeof Order_status;
}
export interface TOrderRequest {
    date: Date;
    startTime: string;
    endTime: string;
    facility: Types.ObjectId | TProduct;
}
