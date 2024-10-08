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
const updateFacilityById: RequestHandler = catchAsync(async (req, res) => {
    const result = await FacilityServices.updateFacilityById(
        req.params.id,
        req.body
    );

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: `Facility updated successfully`,
        data: result,
    });
});
const deleteFacilityById: RequestHandler = catchAsync(async (req, res) => {
    const result = await FacilityServices.deleteSoftFacilityById(req.params.id);

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: `Facility deleted successfully`,
        data: result,
    });
});
/** GET A Facilitys By ID */
const getFacilityById: RequestHandler = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await FacilityServices.getFacilityByIdFromDB(id);

    res.status(200).json({
        success: true,
        message: `Data get successfully!`,
        data: result,
    });
});
/** GET Facilitys */
const getFacilitys: RequestHandler = catchAsync(async (req, res) => {
    const result = await FacilityServices.getFacilitysFromDB();

    res.status(200).json({
        success: true,
        message: `Data get successfully!`,
        data: result.filter(facility => facility.isDeleted === false),
    });
});

export const facilityControllers = {
    createFacility,
    updateFacilityById,
    deleteFacilityById,
    getFacilityById,
    getFacilitys,
};
