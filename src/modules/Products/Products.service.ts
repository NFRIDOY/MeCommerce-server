import AppError from "../../errors/AppError";
import { IProduct } from "./Products.interface";
import { Facility } from "./Products.model";

const createFacilityIntoDB = async (payload: IProduct) => {
    const facility = await Facility.create(payload);
    return facility;
};
// const updateFacilityById = async (_id: string, updateObj: Partial<IProduct>) : Promise<IProduct | null> => => { //
const updateFacilityById = async (_id: string, updateObj: IProduct) => {
    const facilityBefore = await Facility.findOneAndUpdate({ _id }, updateObj);

    if (!facilityBefore) throw new AppError(500, "Facility update failed");

    const facility = await Facility.findOne({ _id });

    return facility;
};
const deleteSoftFacilityById = async (_id: string) => {
    const facility = await Facility.findOneAndUpdate(
        { _id },
        { isDeleted: true }
    );
    return facility;
};
const getFacilityByIdFromDB = async (_id: string) => {
    const facility = await Facility.findOne({ _id });
    return facility;
};
const getFacilitysFromDB = async () => {
    const facility = await Facility.find();
    return facility;
};
export const FacilityServices = {
    createFacilityIntoDB,
    updateFacilityById,
    deleteSoftFacilityById,
    getFacilityByIdFromDB,
    getFacilitysFromDB,
};
