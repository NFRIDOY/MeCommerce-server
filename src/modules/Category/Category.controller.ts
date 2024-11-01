import { RequestHandler } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { CategoryServices } from './Category.service';

const createCategory: RequestHandler = catchAsync(async (req, res) => {
    const result = await CategoryServices.createCategoryIntoDB(req.body);

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: `Category added successfully`,
        data: result,
    });
});
const updateCategoryById: RequestHandler = catchAsync(async (req, res) => {
    const result = await CategoryServices.updateCategoryById(
        req.params.id,
        req.body
    );

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: `Category updated successfully`,
        data: result,
    });
});
const deleteCategoryById: RequestHandler = catchAsync(async (req, res) => {
    const result = await CategoryServices.deleteSoftCategoryById(req.params.id);

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: `Category deleted successfully`,
        data: result,
    });
});
/** GET A Category By ID */
const getCategoryById: RequestHandler = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await CategoryServices.getCategoryByIdFromDB(id);

    res.status(200).json({
        success: true,
        message: `Data get successfully!`,
        data: result,
    });
});
/** GET Category */
const getCategory: RequestHandler = catchAsync(async (req, res) => {
    const result = await CategoryServices.getCategoryFromDB();

    res.status(200).json({
        success: true,
        message: `Data get successfully!`,
        data: result.filter(category => category.isDeleted === false),
    });
});

export const categoryControllers = {
    createCategory,
    updateCategoryById,
    deleteCategoryById,
    getCategoryById,
    getCategory,
};
