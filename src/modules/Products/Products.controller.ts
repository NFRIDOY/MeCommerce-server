import { RequestHandler } from "express";
import { ProductServices } from "./Products.service";
import { catchAsync } from "../../utils/catchAsync";

const createProduct: RequestHandler = catchAsync(async (req, res) => {
    const result = await ProductServices.createProductIntoDB(req.body);

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: `Product added successfully`,
        data: result,
    });
});
const updateProductById: RequestHandler = catchAsync(async (req, res) => {
    const result = await ProductServices.updateProductById(
        req.params.id,
        req.body
    );

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: `Product updated successfully`,
        data: result,
    });
});
const deleteProductById: RequestHandler = catchAsync(async (req, res) => {
    const result = await ProductServices.deleteSoftProductById(req.params.id);

    res.status(200).json({
        success: true,
        statusCode: 200,
        message: `Product deleted successfully`,
        data: result,
    });
});
/** GET A Products By ID */
const getProductById: RequestHandler = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProductServices.getProductByIdFromDB(id);

    res.status(200).json({
        success: true,
        message: `Data get successfully!`,
        data: result,
    });
});
/** GET Products */
const getProducts: RequestHandler = catchAsync(async (req, res) => {
    const result = await ProductServices.getProductsFromDB();

    res.status(200).json({
        success: true,
        message: `Data get successfully!`,
        data: result.filter(product => product.isDeleted === false),
    });
});

export const productsControllers = {
    createProduct,
    updateProductById,
    deleteProductById,
    getProductById,
    getProducts,
};
