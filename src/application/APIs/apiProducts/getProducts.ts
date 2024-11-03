import { Product } from "../../../domain/entities/Product";
import { ProductsRepository } from "../../../presentation/pages/products/types/ProductDetail.Res";
import apiRequest from "../../connectAPI/requestAPI";
import { routes } from "../../constants/constants.routers";

//get list products by category or all
export const getProducts = async (category?: string): Promise<ProductsRepository> => {
    return await apiRequest<ProductsRepository>({
        path: `${routes.products.path}${category ? routes.category.path + `/${category}` : ''}`,
        method: 'GET',
    });
};

// get detail product by id
export const getProductDetail = async (id: string): Promise<Product> => {
    return await apiRequest<Product>({
        path: routes.products.path + `/${id}`,
        method: 'GET',
    });
}