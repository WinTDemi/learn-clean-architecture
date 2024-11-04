import { Product } from "../../../../application/entities/Product";

export interface ProductsReq {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}