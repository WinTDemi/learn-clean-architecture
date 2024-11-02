import { ProductDetailRequest } from "../../presentation/pages/products/types/ProductDetail.Req";

const endpointsAPI = {
    products: '/products',
    productDetail: (id: ProductDetailRequest) => `/products/${id}`,
};

export default endpointsAPI