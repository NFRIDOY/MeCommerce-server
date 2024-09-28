import { ErrorRequestHandler } from "express";

export const globalErrorHandler: ErrorRequestHandler = (
    err,
    req,
    res,
    next
) => {
    console.error(err.stack);
    return res.status(500).json({
        success: false,
        message: "Something went wrong!",
        err,
    });
    next();
};
