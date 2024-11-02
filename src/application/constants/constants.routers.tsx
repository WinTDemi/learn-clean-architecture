import ProductsPage from '../../presentation/pages/products/productsPage';
import DetailProductPage from '../../presentation/pages/detailProduct/detailProductPage';
import Error from '../../presentation/pages/error';

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
