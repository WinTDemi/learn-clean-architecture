import endpointsAPI from "../../connectAPI/endpointsAPI";
import handleTryCatch from "../../connectAPI/handleTryCatch";
import { apiService } from "../../connectAPI/serviceAPI";

export const getProducts = async (category?: string) => {
    return handleTryCatch(async () => {
        let endpoint = endpointsAPI.products;
        if (category) {
            endpoint += `/category/${category}`;
        }
        const response = await apiService(endpoint, 'GET');
        return response;
    });
};