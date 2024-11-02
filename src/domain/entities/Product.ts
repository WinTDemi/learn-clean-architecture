// src/domain/entities/Product.ts

interface ProductReview {
    rating: number;
    comment: string;
    date: string; // ISO date string
    reviewerName: string;
    reviewerEmail: string;
}

interface ProductDimensions {
    width: number;
    height: number;
    depth: number;
}

interface ProductMeta {
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    barcode: string;
    qrCode: string;
}

export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    sku: string;
    weight: number;
    dimensions: ProductDimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: ProductReview[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: ProductMeta;
    images: string[];
    thumbnail: string;
}