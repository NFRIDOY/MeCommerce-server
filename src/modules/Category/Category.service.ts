import AppError from "../../errors/AppError";
import { TCategory } from "./Category.interface";
import { Category } from "./Category.model";

const createCategoryIntoDB = async (payload: TCategory) => {
    const category = await Category.create(payload);
    return category;
};
// const updateCategoryById = async (_id: string, updateObj: Partial<TCategory>) : Promise<TCategory | null> => => { //
const updateCategoryById = async (_id: string, updateObj: TCategory) => {
    const categoryBefore = await Category.findOneAndUpdate({ _id }, updateObj);

    if (!categoryBefore) throw new AppError(500, "Category update failed");

    const category = await Category.findOne({ _id });

    return category;
};
const deleteSoftCategoryById = async (_id: string) => {
    const category = await Category.findOneAndUpdate(
        { _id },
        { isDeleted: true }
    );
    return category;
};
const getCategoryByIdFromDB = async (_id: string) => {
    const category = await Category.findOne({ _id });
    return category;
};
const getCategoryFromDB = async () => {
    const category = await Category.find();
    return category;
};
export const CategoryServices = {
    createCategoryIntoDB,
    updateCategoryById,
    deleteSoftCategoryById,
    getCategoryByIdFromDB,
    getCategoryFromDB,
};
