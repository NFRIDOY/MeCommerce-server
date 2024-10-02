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

export const userControllers = {
    createUser,
};
