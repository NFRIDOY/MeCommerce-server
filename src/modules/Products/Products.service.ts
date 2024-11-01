import AppError from "../../errors/AppError";
import { TProduct } from "./Products.interface";
import { Product } from "./Products.model";

const createProductIntoDB = async (payload: TProduct) => {
    const product = await Product.create(payload);
    return product;
};
// const updateProductById = async (_id: string, updateObj: Partial<TProduct>) : Promise<TProduct | null> => => { //
const updateProductById = async (_id: string, updateObj: TProduct) => {
    const productBefore = await Product.findOneAndUpdate({ _id }, updateObj);

    if (!productBefore) throw new AppError(500, "Product update failed");

    const product = await Product.findOne({ _id });

    return product;
};
const deleteSoftProductById = async (_id: string) => {
    const product = await Product.findOneAndUpdate(
        { _id },
        { isDeleted: true }
    );
    return product;
};
const getProductByIdFromDB = async (_id: string) => {
    const product = await Product.findOne({ _id });
    return product;
};
const getProductsFromDB = async () => {
    const product = await Product.find();
    return product;
};
export const ProductServices = {
    createProductIntoDB,
    updateProductById,
    deleteSoftProductById,
    getProductByIdFromDB,
    getProductsFromDB,
};
