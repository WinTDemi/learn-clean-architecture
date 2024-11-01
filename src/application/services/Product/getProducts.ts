import baseAPI from "../../connectAPI/baseAPI";
import endpointsAPI from "../../connectAPI/endpointsAPI";
import handleTryCatch from "../../helpers/handleTryCatch";

export const getProducts = async (category?: string) => {
    return handleTryCatch(async () => {
        let endpoint = endpointsAPI.products;
        if (category) {
            endpoint += `/category/${category}`;
        }
        const response = await baseAPI.get(endpoint);
        return response.data;
    });
};