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
    price: {
        type: Number,
        required: [true, "Price Per Hour is required"],
    },
    category: {
        type: String,
        required: [true, "Location is required"],
    },
    images: {
        type: String,
        required: [true, "Location is required"],
    },
    stockQuantity: {
        type: Number,
        required: [true, "Quantity is required"],
    },
    isDeleted: {
        type: Boolean,
        default: false,
        select: true
    },
});

export const Facility = model<IProduct>("Facility", facilitySchema);
