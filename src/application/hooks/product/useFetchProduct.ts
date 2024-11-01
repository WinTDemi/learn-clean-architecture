import { useQuery } from "@tanstack/react-query";
import { useLocation } from 'react-router-dom';
import { ProductsRepository } from "../../../domain/entities/Product";
import { getProducts } from "../../services/Product/getProducts";
import { routes } from "../../constants/routes";
import queryString from "query-string";
import params from "../../constants/params";

export const useFetchProduct = () => {
    const location = useLocation();
    const queryKey = [location.pathname, location.search];
    let category = '';

    if (location.pathname === routes.category.path) {
        category = queryString.parse(location.search)?.[params.CATEGORY]?.toString() || '';
    }

    return useQuery<ProductsRepository>({
        queryKey,
        queryFn: () => getProducts(category),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    });
};