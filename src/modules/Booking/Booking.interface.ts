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
    date: string;
    startTime: string;
    endTime: string;
    user: string;
    facility: string;
    payableAmount: number;
    isBooked: boolean;
}
