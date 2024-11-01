/**
Product Name
Description
Price
Stock Quantity
Category
Product Images
 */
export interface TCategory {
    name: string;
    description: string;
    images: string;
    isAvailable?: boolean; // true
    isDeleted?: boolean;
}
