import { getProductDetail } from "../../APIs/apiProducts/getProducts";
import { queryParams } from "../../constants/constants.QueryParams";
import useFetch from "../common/useFetch";
import { DetailProductRes } from "../../../presentation/pages/detailProduct/types/ProductDetail.Res";
import { getQueryParamFromLocation } from "../../utilities/getQueryParamFromLocation";

export const useFetchDetailProduct = () => {
    // Get the product ID from query string
    const productId = getQueryParamFromLocation(queryParams.DETAIL_PRODUCT_ID);
    // Check for valid product ID
    if (!productId) {
        throw new Error("Invalid product ID");
    }
    // get products by TanStack Query 
    return useFetch<DetailProductRes>('detail', productId, getProductDetail);
};