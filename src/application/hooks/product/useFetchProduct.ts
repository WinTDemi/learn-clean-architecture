import { useLocation } from 'react-router-dom';
import { getProducts } from "../../APIs/apiProducts/getProducts";
import { routes } from "../../constants/constants.routers";
import queryString from "query-string";
import { params } from "../../constants/constants.params";
import useFetch from "../common/useFetch";
import { ProductsRepository } from '../../../presentation/pages/products/types/ProductDetail.Res';
import { CategoryProductRequest } from '../../../presentation/pages/products/types/Product.Req';

export const useFetchProduct = () => {
    let category: CategoryProductRequest = '';
    const location = useLocation();

    // get category from query string if the current path is category 
    if (location.pathname === routes.category.path) {
        category = queryString.parse(location.search)?.[params.CATEGORY]?.toString() || '';
    }

    // get products by TanStack Query 
    return useFetch<ProductsRepository>('products', category, getProducts);
};