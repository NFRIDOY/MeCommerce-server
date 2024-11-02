import { Types } from "mongoose";
import { TProduct } from "../Products/Products.interface";
import { TUser } from "../user/user.interface";
import { Order_status } from "./Orders.constants";

export interface TOrder {
    date: Date;
    user: Types.ObjectId | TUser;
    products: [Types.ObjectId];
    payableAmount: number;
    isBooked: keyof typeof Order_status;
}
export interface TOrderRequest {
    date: Date;
    product: Types.ObjectId | TProduct;
}
