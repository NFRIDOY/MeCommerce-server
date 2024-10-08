import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async (payload: IUser) => {
    const user = await User.create(payload);
    return user;
};
const getUserByIdFromDB = async (_id: string) => {
    const user = await User.findOne({ _id });
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
};
