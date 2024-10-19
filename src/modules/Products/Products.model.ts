import { model, Schema } from "mongoose";
import { IProduct } from "./Products.interface";

const facilitySchema = new Schema<IProduct>({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    pricePerHour: {
        type: Number,
        required: [true, "Price Per Hour is required"],
    },
    location: {
        type: String,
        required: [true, "Location is required"],
    },
    isDeleted: {
        type: Boolean,
        default: false,
        select: true
    },
});

export const Facility = model<IProduct>("Facility", facilitySchema);
