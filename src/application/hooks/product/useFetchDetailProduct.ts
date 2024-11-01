import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { Product } from "../../../domain/entities/Product";
import { getProductDetail } from "../../services/Product/getProductDetail";
import queryString from "query-string";
import params from "../../constants/params";

export const useFetchDetailProduct = () => {
    const location = useLocation();
    const queryKey = ['detail', location.search];

    const productDetailId = Number(queryString.parse(location.search)?.[params.ID])

    return useQuery<Product>({
        queryKey,
        queryFn: () => getProductDetail(productDetailId),
        staleTime: Infinity,
        // cacheTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    });
};