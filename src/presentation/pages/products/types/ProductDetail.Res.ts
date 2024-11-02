import { Product } from "../../../../domain/entities/Product";

export interface ProductsRepository {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}