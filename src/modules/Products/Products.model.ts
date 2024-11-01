import { model, Schema } from "mongoose";
import { TProduct } from "./Products.interface";

const productSchema = new Schema<TProduct>({
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
        type: Schema.Types.ObjectId,
        ref: "Category",
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
        select: true,
    },
});

export const Facility = model<TProduct>("Facility", productSchema);
