import { DetailProductRes } from "../../../presentation/pages/detailProduct/types/ProductDetail.Res";
import { ProductsRes } from "../../../presentation/pages/products/types/Product.Res";
import requestAPI from "../../connectAPI/requestAPI";
import { routes } from "../../constants/constants.routers";

//get list products by category or all
export const getProducts = async (category?: string): Promise<ProductsRes> => {
    return await requestAPI<ProductsRes>({
        path: `${routes.products.path}${category ? routes.category.path + `/${category}` : ''}`,
        method: 'GET',
    });
};

// get detail product by id
export const getProductDetail = async (id: string): Promise<DetailProductRes> => {
    return await requestAPI<DetailProductRes>({
        path: routes.products.path + `/${id}`,
        method: 'GET',
    });
}