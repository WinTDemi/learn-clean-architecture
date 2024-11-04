import { Product } from "../../../../application/entities/Product";
export interface ProductsRes {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}