import queryString from "query-string";
import { Product } from "../../../domain/entities/Product";
import getDataDetailProduct from "../../helpers/getDataDetailProduct";

const serviceEndpointGetDataDetailProduct = (search: string): Promise<Product> => {
    const parsed = queryString.parse(search);
    let endpoint = `${import.meta.env.VITE_PRODUCTS_API_URL}/${parsed.id}`;
    return getDataDetailProduct(endpoint);

}

export default serviceEndpointGetDataDetailProduct