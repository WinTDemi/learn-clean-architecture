import { useLocation } from "react-router-dom";
import { Product } from "../../../domain/entities/Product";
import { getProductDetail } from "../../services/Product/getProductDetail";
import queryString from "query-string";
import { params } from "../../constants/constants.params";
import useFetch from "../common/useFetch";

export const useFetchDetailProduct = () => {
    const location = useLocation();
    const productId = Number(queryString?.parse(location.search)?.[params.ID]);

    return useFetch<Product>(
        ['detail', productId],
        () => getProductDetail(productId),
    );
};