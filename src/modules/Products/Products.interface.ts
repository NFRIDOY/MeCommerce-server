import { Schema } from "mongoose";

/**
Product Name
Description
Price
Stock Quantity
Category
Product Images
 */
export interface TProduct {
    name: string;
    description: string;
    price: number;
    stockQuantity: number;
    category: Schema.Types.ObjectId; // id of product category
    images: string;
    isDeleted?: boolean;
}
