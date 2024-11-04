import { useFetchProduct } from "../../../application/hooks/product/useFetchProduct";
import { Product } from "../../../application/entities/Product";
import Error from "../../components/error";
import Loading from "../../components/loading";
import { memo } from "react";
import ProductCard from "../../components/productCard";

const ProductsPage = () => {

    // Fetch products from hook TanStack 
    // error is message error
    const { data, isLoading, error } = useFetchProduct();

    // get list products and total from data TanStack
    const { products, total } = data || {};

    return (
        <>
            <Error error={error} />
            <Loading isLoading={isLoading} />
            {
                data &&
                (<div className="container p-4 mx-auto">
                    <h2 className="mb-4 text-2xl font-bold capitalize">{total} products</h2>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {products?.map((product: Product) => (
                            <ProductCard key={product.id} product={product} /> // Use ProductCard here
                        ))}
                    </div>
                </div>)
            }

        </>

    )
}

export default memo(ProductsPage)