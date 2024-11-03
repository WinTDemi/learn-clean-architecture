import { useLocation } from "react-router-dom";
import { Product } from "../../../domain/entities/Product";
import { getProductDetail } from "../../APIs/apiProducts/getProducts";
import queryString from "query-string";
import { params } from "../../constants/constants.params";
import useFetch from "../common/useFetch";

export const useFetchDetailProduct = () => {
    const location = useLocation();

    // Get the product ID from query string
    const productId = queryString?.parse(location.search)?.[params.ID] as string;

    // Check for valid product ID
    if (!productId) {
        throw new Error("Invalid product ID");
    }

    // get products by TanStack Query 
    return useFetch<Product>('detail', productId, getProductDetail);
};