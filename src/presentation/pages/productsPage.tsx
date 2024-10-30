import { useNavigate } from "react-router-dom";
import { useFetchProduct } from "../../application/hooks/product/useFetchProduct";
import { Product } from "../../domain/entities/Product";
import { Spin } from "antd";

export const ProductsPage = () => {

    const navigate = useNavigate();

    const { data, error, isLoading } = useFetchProduct();

    const { products, total, skip, limit } = data || {};

    console.log(total, skip, limit)

    if (isLoading) {
        return (
            <div className="flex items-center justify-center w-full h-screen">
                <Spin tip="Loading..." size="large"></Spin>
            </div>
        );
    }

    if (error) {
        return <div
            className="flex items-center justify-center w-full h-screen"
        >
            Error: {error.message}
        </div>;
    }

    return (
        <div className="container p-4 mx-auto">
            <h2 className="mb-4 text-2xl font-bold capitalize">{total} products</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products?.map((product: Product) => (
                    <div
                        key={product.id}
                        onClick={() => navigate(`/detail?id=${product.id}`)}
                        className="flex flex-col h-full p-4 bg-white rounded-lg shadow-md hover:shadow-2xl"
                    >
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="object-contain w-full h-48 rounded-t-lg"
                        />
                        <div className="flex flex-col justify-between flex-grow">
                            <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
                            <div className="flex items-center justify-between mt-2">
                                <p className="font-bold">${product.price}</p>
                                <p className="text-green-500">{product.availabilityStatus}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
