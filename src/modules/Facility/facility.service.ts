import { IFacility } from "./facility.interface";
import { Facility } from "./facility.model";

const createFacilityIntoDB = async (payload: IFacility) => {
    const facility = await Facility.create(payload);
    return facility;
};
const updateFacilityById = async (payload: string, updateObj: IFacility) => { 
    const facility = await Facility.findOneAndUpdate({ payload }, updateObj);
    return facility;
};
const getFacilitysFromDB = async () => {
    const facility = await Facility.find();
    return facility;
};
export const FacilityServices = {
    createFacilityIntoDB,
    updateFacilityById,
    getFacilitysFromDB,
};
