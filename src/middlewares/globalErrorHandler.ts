/** Error Example
// {
//     "success": false,
//     "message": "E11000 duplicate key error collection: univerity-management.students index: email_1 dup key: { email: \\"user2@gmail.com\\" }",
//     "errorMessages": [
//         {
//             "path": "",
//             "message": "E11000 duplicate key error collection: project index: email_1 dup key: { email: \\"user2@gmail.com\\" }"
//         }
//     ],
//     "stack": "MongoServerError: E11000 duplicate key error collection: project index: email_1 dup key: { email: \\"user2@gmail.com\\" }\\n    at H:\\\\next-level-development\\\\project-management-auth-service\\\\node_modules\\\\mongodb\\\\src\\\\operations\\\\insert.ts:85:25\\n    at H:\\\\next-level-development\\\\university-management-auth-service\\\\node_modules\\\\mongodb\\\\src\\\\cmap\\\\connection_pool.ts:574:11\\n    at H:\\\\next-level-development\\\\university-writeOrBuffer (node:internal/streams/writable:391:12)"
// } 
*/
import { ErrorRequestHandler } from "express";

export const globalErrorHandler: ErrorRequestHandler = (
    err,
    req,
    res,
    next
) => {
    // let success = false;
    // let message = "Something went wrong!";
    // let errorMessages = [{
    //     path: "",
    //     message: message
    // }];
    // let stack = "";

    console.error(err.stack);
    return res.status(500).json({
        success: false,
        message: "Something went wrong!",
        err,
    });
    next();
};
