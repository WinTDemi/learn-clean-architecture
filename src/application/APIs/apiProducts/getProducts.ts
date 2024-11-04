import { DetailProductReq } from "../../../presentation/pages/detailProduct/types/ProductDetail.Req";
import { ProductsReq } from "../../../presentation/pages/products/types/Product.Req";
import requestAPI from "../../connectAPI/requestAPI";
import { routes } from "../../constants/constants.routers";

//get list products by category or all
export const getProducts = async (category?: string): Promise<ProductsReq> => {
    return await requestAPI<ProductsReq>({
        path: `${routes.products.path}${category ? routes.category.path + `/${category}` : ''}`,
        method: 'GET',
    });
};

// get detail product by id
export const getProductDetail = async (id: string): Promise<DetailProductReq> => {
    return await requestAPI<DetailProductReq>({
        path: routes.products.path + `/${id}`,
        method: 'GET',
    });
}