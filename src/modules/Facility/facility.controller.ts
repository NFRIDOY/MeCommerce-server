import { RequestHandler } from "express";
import { FacilityServices } from "./facility.service";
import { catchAsync } from "../../utils/catchAsync";

const createFacility: RequestHandler = catchAsync(async (req, res) => {
    const result = await FacilityServices.createFacilityIntoDB(req.body);

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: `Facility added successfully`,
        data: result,
    });
});
/** GET Facilitys */
const getFacilitys: RequestHandler = catchAsync(async (req, res) => {
    const result = await FacilityServices.getFacilitysFromDB();

    res.status(200).json({
        success: true,
        message: `Data get successfully!`,
        data: result,
    });
});

export const facilityControllers = {
    createFacility,
    getFacilitys
};
