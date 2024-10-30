import { useQuery } from "@tanstack/react-query";
import { useLocation } from 'react-router-dom';
import { serviceCheckEndpointGetDataProducts } from "../../services/Product/serviceCheckEndpointGetDataProducts";
import { ProductsRepository } from "../../../domain/entities/Product";

export const useFetchProduct = () => {
    const location = useLocation();
    const queryKey = [location.pathname, location.search];
    console.log('queryKey', queryKey);

    return useQuery<ProductsRepository>({
        queryKey,
        queryFn: () => serviceCheckEndpointGetDataProducts(location.pathname, location.search),
        staleTime: Infinity,
        // cacheTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    });
};
// data, isLoading, isError, error
