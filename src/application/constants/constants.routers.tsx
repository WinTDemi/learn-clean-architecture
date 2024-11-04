import ProductsPage from '../../presentation/pages/products/productsPage';
import DetailProductPage from '../../presentation/pages/detailProduct/detailProductPage';

interface Route {
    [key: string]: {
        name: string;
        path: string;
        element?: JSX.Element;
    }
}

export const routes: Route = {
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
    products: {
        name: 'products',
        path: '/products',
    }
};
