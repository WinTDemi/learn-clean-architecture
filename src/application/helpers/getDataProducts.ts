import axios from "axios";
import { ProductsRepository } from "../../domain/entities/Product";

export const getDataProducts = async (endpoint: string): Promise<ProductsRepository> => {
    const response = await axios.get<ProductsRepository>(endpoint);
    const { products, total, skip, limit } = response.data;
    console.log('call api products');
    // Return an object that conforms to the ProductRepository interface
    return { products, total, skip, limit };
};
