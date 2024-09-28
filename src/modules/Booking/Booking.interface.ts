export interface IBooking {
    date: string;
    startTime: string;
    endTime: string;
    user: string;
    facility: string;
    payableAmount: number;
    isBooked: boolean;
}
