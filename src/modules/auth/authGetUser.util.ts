import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../../config";
// import { IBookingRequest } from "../Booking/Booking.interface";

export const authGetUser = (accessToken: string) => {
    const verfiedToken = jwt.verify(
        accessToken as string,
        config.jwt_access_secret as string
    );

    // console.log("verfiedToken: ", verfiedToken);
    const { id: user } = verfiedToken as JwtPayload;

    return user;
};

// export const authGetUserByToken = (object: IBookingRequest) => {

// }


