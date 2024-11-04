import { useLocation } from 'react-router-dom';
import { getProducts } from "../../APIs/apiProducts/getProducts";
import { routes } from "../../constants/constants.routers";
import queryString from "query-string";
import { queryParams } from "../../constants/constants.QueryParams";
import useFetch from "../common/useFetch";
import { ProductsRes } from '../../../presentation/pages/products/types/Product.Res';

export const useFetchProduct = () => {
    const location = useLocation();

    const category = location.pathname === routes.category.path
        ? queryString.parse(location.search)?.[queryParams.CATEGORY_PRODUCTS]?.toString() || ''
        : '';

    // get products by TanStack Query 
    return useFetch<ProductsRes>('products', category, getProducts);
};