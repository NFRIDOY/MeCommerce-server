import { model, Schema } from "mongoose";
import { TProduct } from "./Products.interface";

export const productSchemaObject = {
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
};

const productSchema = new Schema(productSchemaObject);

export const Product = model<TProduct>("Product", productSchema);
