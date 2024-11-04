import { useLocation } from 'react-router-dom';
import { getProducts } from "../../APIs/apiProducts/getProducts";
import { routes } from "../../constants/constants.routers";
import queryString from "query-string";
import { queryParams } from "../../constants/constants.params";
import useFetch from "../common/useFetch";
import { ProductsReq } from '../../../presentation/pages/products/types/Product.Req';
import { CategoryProductRes } from '../../../presentation/pages/products/types/Product.Res';

export const useFetchProduct = () => {
    let category: CategoryProductRes = '';
    const location = useLocation();

    // get category from query string if the current path is category 
    if (location.pathname === routes.category.path) {
        category = queryString.parse(location.search)?.[queryParams.CATEGORY_PRODUCTS]?.toString() || '';
    }

    // get products by TanStack Query 
    return useFetch<ProductsReq>('products', category, getProducts);
};