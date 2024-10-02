import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";
import { USER_Role } from "./user.constants";

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    role: {
        type: String,
        required: [true, "Role is required"],
        enum: Object.keys(USER_Role),
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: 0,
    },
    address: {
        type: String,
        required: [true, "Address is required"],
    }
});

export const User = model<IUser>("User", userSchema);
