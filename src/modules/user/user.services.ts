import { IUser } from "./user.interface";
import { User } from "./user.model";

const createAdminIntoDB = async (payload: IUser) => {
    const admin = await User.create(payload);
    return admin;
};
const createUserIntoDB = async (payload: IUser) => {
    const user = await User.create(payload);
    return user;
};

export const UserServices = {
    createAdminIntoDB,
    createUserIntoDB
};
