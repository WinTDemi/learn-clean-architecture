import { memo } from "react";
import Loading from "../../components/loading";
import Error from "../error";
import { useFetchDetailProduct } from "../../../application/hooks/product/useFetchDetailProduct";
import { Product } from "../../../domain/entities/Product";

const DetailProductPage = () => {
    const { data, isLoading, error } = useFetchDetailProduct();
    const product = data ? data : {} as Product;

    if (isLoading) {
        return (
            <Loading />
        );
    }

    if (error) {
        return (
            <Error />
        )
    }

    return (
        <div className="container p-4 mx-auto">
            <h1 className="mb-4 text-2xl font-bold">{product.title}</h1>
            <div className="flex flex-col gap-4 lg:flex-row">
                {/* Product Image */}
                <div className="flex-shrink-0 w-full lg:w-1/2">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="object-contain w-full h-full shadow-xl rounded-2xl"
                    />
                </div>

                {/* Product Details */}
                <div className="flex flex-col w-full gap-4 lg:w-1/2">
                    <p className="text-lg font-semibold">Category: {product.category}</p>
                    <p className="text-gray-700">{product.description}</p>
                    <p className="text-lg font-bold text-green-600">Price: ${product.price}</p>
                    <p className="text-sm font-semibold text-gray-500">Discount: {product.discountPercentage}%</p>
                    <p className={`text-sm font-semibold ${product.availabilityStatus === 'Low Stock' ? 'text-red-500' : 'text-green-500'}`}>
                        {product.availabilityStatus}
                    </p>

                    {/* Additional Details */}
                    <div className="pt-4 border-t">
                        <p><strong>SKU:</strong> {product.sku}</p>
                        <p><strong>Weight:</strong> {product.weight} grams</p>
                        <p><strong>Dimensions:</strong> {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm</p>
                        <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
                        <p><strong>Shipping:</strong> {product.shippingInformation}</p>
                        <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
                        <p><strong>Minimum Order Quantity:</strong> {product.minimumOrderQuantity}</p>
                    </div>

                    {/* Reviews */}
                    <div className="pt-4 border-t">
                        <h3 className="text-lg font-semibold">Reviews</h3>
                        {product.reviews.length > 0 ? (
                            <ul className="space-y-2">
                                {product.reviews.map((review, index) => (
                                    <li key={index} className="p-2 border rounded-lg shadow-sm">
                                        <p className="text-sm font-bold">{review.reviewerName} - Rating: {review.rating}</p>
                                        <p className="text-sm italic">{review.comment}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No reviews available.</p>
                        )}
                    </div>

                    {/* Meta Information */}
                    <div className="pt-4 border-t">
                        <p><strong>Barcode:</strong> {product.meta.barcode}</p>
                        <a href={product.meta.qrCode} target="_blank" rel="noopener noreferrer">
                            <img src={product.meta.qrCode} alt="QR Code" className="w-24 h-24 mt-2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(DetailProductPage)
