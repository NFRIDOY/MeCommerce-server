import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async (payload: TUser) => {
    const user = await User.create(payload);
    return user;
};
const getUserByIdFromDB = async (_id: string) => {
    const user = await User.findOne({ _id });
    return user;
};
const updateUserByIdFromDB = async (payload: TUser) => {
    const user = await User.findByIdAndUpdate(payload?._id, payload);
    return user;
};
const getUsersFromDB = async () => {
    const user = await User.find();
    return user;
};
export const UserServices = {
    createUserIntoDB,
    getUserByIdFromDB,
    getUsersFromDB,
    updateUserByIdFromDB,
};
