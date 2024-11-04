import { DetailProductRes } from "../../../presentation/pages/detailProduct/types/ProductDetail.Res";
import { ProductsRes } from "../../../presentation/pages/products/types/Product.Res";
import requestAPI from "../../connectAPI/requestAPI";
import { routes } from "../../constants/constants.routers";

//get list products by category or all
export const getProducts = async (category?: string): Promise<ProductsRes> => {
    const path = category ? `${routes.products.path}${routes.category.path}/${category}` : routes.products.path;

    const response = await requestAPI<ProductsRes>({
        path,
        method: 'GET',
    });

    // throw error if no products found
    if (response.products.length === 0) {
        throw new Error(category ? `No products found in ${category} category` : 'No products found');
    }

    return response;
};

// get detail product by id
export const getProductDetail = async (id: string): Promise<DetailProductRes> => {

    const response = await requestAPI<DetailProductRes>({
        path: routes.products.path + `/${id}`,
        method: 'GET',
    });

    if (!response) {
        throw new Error('No product found');
    }

    return response
}