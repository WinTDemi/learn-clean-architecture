import { ProductIDDetailReq } from "../../../presentation/pages/detailProduct/types/ProductDetail.Req";
import { DetailProductRes } from "../../../presentation/pages/detailProduct/types/ProductDetail.Res";
import { CategoryProductsReq } from "../../../presentation/pages/products/types/Product.Req";
import { ProductsRes } from "../../../presentation/pages/products/types/Product.Res";
import { requestAPI } from "../../connectAPI/requestAPI";
import { routes } from "../../constants/constants.routers";

// get list products by category or all
export const getProducts = async (categoryProducts?: CategoryProductsReq): Promise<ProductsRes> => {

    const response = await requestAPI<ProductsRes>({
        path: categoryProducts ? `${routes.products.path}${routes.category.path}/${categoryProducts}` : routes.products.path,
        method: 'GET',
    });

    // throw error if no products found
    if (response.products.length === 0) {
        throw new Error(categoryProducts ? `No products found in ${categoryProducts} category` : 'No products found');
    }

    return response;
};

// get detail product by id
export const getProductDetail = async (productID: ProductIDDetailReq): Promise<DetailProductRes> => {

    if (!productID) {
        throw new Error('Product ID not found in query parameters');
    }

    const response = await requestAPI<DetailProductRes>({
        path: routes.products.path + `/${productID}`,
        method: 'GET',
    });

    return response
}