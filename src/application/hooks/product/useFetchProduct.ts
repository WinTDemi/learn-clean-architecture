import { getProducts } from "../../APIs/apiProducts/getProducts";
import { routes } from "../../constants/constants.Routers";
import { queryParams } from "../../constants/constants.QueryParams";
import useFetch from "../common/useFetch";
import { ProductsRes } from '../../../presentation/pages/products/types/Product.Res';
import { getQueryParamFromLocation } from "../../utilities/getQueryParamFromLocation";

export const useFetchProduct = () => {

    let category: string = '';
    const categoryFromLocation = getQueryParamFromLocation(queryParams.CATEGORY_PRODUCTS);

    if (location.pathname === routes.category.path && Array.isArray(categoryFromLocation)) {
        category = categoryFromLocation[0] ?? '';
    } else if (typeof categoryFromLocation === 'string') {
        category = categoryFromLocation;
    }

    // get products by TanStack Query 
    return useFetch<ProductsRes>('products', category, getProducts);
};