import { RequestHandler } from "express";
import { UserServices } from "./user.services";

const createAdmin: RequestHandler = async (req, res) => {
    const result = await UserServices.createAdminIntoDB(req.body);

    res.status(200).json({
        success: true,
        message: "Admin is created successfully!",
        data: result,
    });
};
const createUser: RequestHandler = async (req, res) => {
    const result = await UserServices.createUserIntoDB(req.body);

    res.status(200).json({
        success: true,
        message: "Admin is created successfully!",
        data: result,
    });
};

export const userControllers = {
    createAdmin,
    createUser
};
