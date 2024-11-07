import { model, Schema } from "mongoose";
import { TCategory } from "./Category.interface";

const categorySchema = new Schema<TCategory>({
    name: {
        type: String,
        required: [true, "Name is required"],
        unique: true,
    },
    images: {
        type: String,
        required: [true, "images is required"],
        // unique: true,
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
