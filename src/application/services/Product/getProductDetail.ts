import { ProductDetailRequest } from "../../../presentation/pages/products/types/ProductDetail.Req";
import endpointsAPI from "../../connectAPI/endpointsAPI";
import handleTryCatch from "../../connectAPI/handleTryCatch";
import { apiService } from "../../connectAPI/serviceAPI";

export const getProductDetail = async (id: ProductDetailRequest) => {
    return handleTryCatch(async () => {
        // Check if id is provided
        if (id === undefined || id === null) {
            throw new Error("Product ID is required.");
        }

        const endpoint = endpointsAPI.productDetail(id); // Always set endpoint as id is validated
        const response = await apiService(endpoint, 'GET');

        return response;
    });
};
