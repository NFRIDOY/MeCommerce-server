import { model, Schema } from "mongoose";
import { IFacility } from "./Facility.interface";

const facilitySchema = new Schema<IFacility>({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    pricePerHour: {
        type: String,
        required: [true, "Price Per Hour is required"],
    },
    location: {
        type: String,
        required: [true, "Location is required"],
    },
    isDeleted: {
        type: Boolean,
    },
});

export const Facility = model<IFacility>("Facility", facilitySchema);
