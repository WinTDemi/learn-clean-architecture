// ProductCard.tsx
import { useNavigate } from "react-router-dom";
import { Product } from "../../domain/entities/Product";
import { routes } from "../../application/constants/routes";
import params from "../../application/constants/params";

const ProductCard = ({ product }: { product: Product }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${routes.detail.path}?${params.ID}=${product.id}`);
    };

    return (
        <div
            onClick={handleClick}
            className="flex flex-col h-full p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl"
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
    );
};

export default ProductCard;
