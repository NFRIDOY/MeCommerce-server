import { model, Schema } from "mongoose";
import { TCategory } from "./Category.interface";

const categorySchema = new Schema<TCategory>({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    images: {
        type: String,
        required: [true, "Location is required"],
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
    
    isDeleted: {
        type: Boolean,
        default: false,
    },
});

export const Category = model<TCategory>("Category", categorySchema);
