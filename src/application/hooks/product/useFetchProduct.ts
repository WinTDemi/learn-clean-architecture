import { getProducts } from "../../APIs/apiProducts/getProducts";
// import { routes } from "../../constants/constants.routers";
import { queryParams } from "../../constants/constants.QueryParams";
import useFetch from "../common/useFetch";
import { ProductsRes } from '../../../presentation/pages/products/types/Product.Res';
import { getQueryParamFromLocation } from "../../utilities/getQueryParamFromLocation";

export const useFetchProduct = () => {

    const category = getQueryParamFromLocation(queryParams.CATEGORY_PRODUCTS) ?? '';

    // Get products by TanStack Query 
    return useFetch<ProductsRes>('products', category, getProducts);
};