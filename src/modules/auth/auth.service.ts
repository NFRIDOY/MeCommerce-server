/* eslint-disable @typescript-eslint/no-explicit-any */
import { isPasswordMatched } from "./auth.util";
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import config from "../../config";
import jwt from "jsonwebtoken";
import AppError from "../../errors/AppError";

const register = async (payload: TUser): Promise<any> => {
    //user existence check
    const user = await User.findOne({ email: payload.email });

    if (user) {
        // throw new Error("User already exists");
        throw new AppError(404, "User already exists");
    }

    //create user
    const newUser = await User.create(payload);

    return newUser;
};

const login = async (payload: TLoginUser) => {
    /** Forsing the password to showup - .select("+password") */
    const user = await User.findOne({ email: payload.email }).select(
        "+password"
    );

    // console.log("userFromDB", user);
    if (!user) {
        throw new Error("User not found");
    }

    const passwordMatch = await isPasswordMatched(
        payload.password,
        user.password
    );

    if (!passwordMatch) {
        throw new Error("Password not matched");
    }

    // JWT
    const jwtPayload = {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
    };

    const accessToken = jwt.sign(
        jwtPayload,
        config.jwt_access_secret as string,
        {
            expiresIn: config.jwt_access_expires_in,
        }
    );

    // const refreshToken = jwt.sign(
    //     jwtPayload,
    //     config.jwt_refresh_secret as string,
    //     {
    //         expiresIn: config.jwt_refresh_expires_in,
    //     }
    // );
    // console.log("accessToken: ", accessToken);
    return {
        accessToken,
        user,
    };
};

export const AuthServices = {
    register,
    login,
};
