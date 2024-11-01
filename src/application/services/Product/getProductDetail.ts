import baseAPI from "../../connectAPI/baseAPI";
import endpointsAPI from "../../connectAPI/endpointsAPI";
import handleTryCatch from "../../helpers/handleTryCatch";

export const getProductDetail = async (id?: number) => {
    return handleTryCatch(async () => {
        // Check if id is provided
        if (id === undefined || id === null) {
            throw new Error("Product ID is required.");
        }

        const endpoint = endpointsAPI.productDetail(id); // Always set endpoint as id is validated
        const response = await baseAPI.get(endpoint);

        return response.data;
    });
};
