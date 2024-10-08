import { RequestHandler } from "express";
import { UserServices } from "./user.services";
import { catchAsync } from "../../utils/catchAsync";

const createUser: RequestHandler = catchAsync(async (req, res) => {
    const result = await UserServices.createUserIntoDB(req.body);

    res.status(200).json({
        success: true,
        message: `${req?.body?.role} is created successfully!`,
        data: result,
    });
});
/** getUser By ID GET */
const getUserById: RequestHandler = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await UserServices.getUserByIdFromDB(id);

    res.status(200).json({
        success: true,
        message: `Data get successfully!`,
        data: result,
    });
});

/** GET Users For testing */
//! Testing
const getUsers: RequestHandler = catchAsync(async (req, res) => {
    const result = await UserServices.getUsersFromDB();

    res.status(200).json({
        success: true,
        message: `Data get successfully!`,
        data: result,
    });
});

export const userControllers = {
    createUser,
    getUserById,
    getUsers,
};
