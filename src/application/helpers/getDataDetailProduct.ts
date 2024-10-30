import axios from "axios";
import { Product } from "../../domain/entities/Product";

const getDataDetailProduct = async (endpoint: string): Promise<Product> => {
    const response = await axios.get(endpoint);
    console.log('call api detail products');
    return response.data;
};

export default getDataDetailProduct;
