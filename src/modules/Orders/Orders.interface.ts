import { Types } from "mongoose";
import { IProduct } from "../Products/Products.interface";
import { IUser } from "../user/user.interface";
import { Booking_status } from "./Orders.constants";

/**
 * 
**Booking Model:**

*   `date`: The date of the booking.
*   `startTime`: The start time of the booking.
*   `endTime`: The end time of the booking.
*   `user`: Reference to the user who made the booking.
*   `facility`: Reference to the booked facility.
*   `payableAmount`: The calculated amount payable for the booking.
*   `isBooked`: Status of the booking (confirmed, unconfirmed, or canceled).
 */
export interface IBooking {
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
export interface IBookingRequest {
    date: Date;
    startTime: string;
    endTime: string;
    facility: Types.ObjectId | IProduct;
}
