import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { Product } from "../../../domain/entities/Product";
import serviceEndpointGetDataDetailProduct from "../../services/Product/serviceEndpointGetDataDetailProduct";

export const useFetchDetailProduct = () => {
    const location = useLocation();
    const queryKey = ['detail', location.search];
    console.log('queryKey', queryKey);

    return useQuery<Product>({
        queryKey,
        queryFn: () => serviceEndpointGetDataDetailProduct(location.search),
        staleTime: Infinity,
        // cacheTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    });
};