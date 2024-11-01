import { USER_Role } from "./user.constants";

export interface TUser {
    _id?: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    role: keyof typeof USER_Role;
    address: string;
    isDeleted: boolean;
}
