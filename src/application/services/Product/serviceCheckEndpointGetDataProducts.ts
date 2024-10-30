import queryString from "query-string";
import { getDataProducts } from "../../helpers/getDataProducts";
import { ProductsRepository } from "../../../domain/entities/Product";

export const serviceCheckEndpointGetDataProducts = (pathname: string, search: string): Promise<ProductsRepository> => {
    const parsed = queryString.parse(search);
    let endpoint = `${import.meta.env.VITE_PRODUCTS_API_URL}`;

    if (pathname === "/category") {
        endpoint += `/category/${parsed.category}`;
    }


    return getDataProducts(endpoint);

}
// VITE_PRODUCTS_API_URL
// VITE_PRODUCTS_WITH_CATEGORY_API_URL