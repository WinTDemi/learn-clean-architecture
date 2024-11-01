import ProductsPage from '../../presentation/pages/products/productsPage';
import Error from '../../presentation/components/error';
import DetailProductPage from '../../presentation/pages/detail product/detailProductPage';

export const routes = {
    home: {
        name: 'home',
        path: '/',
        element: <ProductsPage />
    },
    detail: {
        name: 'detail',
        path: '/detail',
        element: <DetailProductPage />
    },
    category: {
        name: 'category',
        path: '/category',
        element: <ProductsPage />
    },
    error: {
        name: 'error',
        path: '/error',
        element: <Error />
    }
};
