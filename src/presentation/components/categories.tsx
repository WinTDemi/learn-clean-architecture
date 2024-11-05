import { useNavigate } from "react-router-dom";
import { routes } from "../../application/constants/constants.routers";
import { queryParams } from "../../application/constants/constants.QueryParams";

const Categories = () => {

    const navigate = useNavigate(); // hook navigate to navigate to another page fillter by category

    const categories = [
        { id: 1, name: "beauty" },
        { id: 2, name: "fragrances" },
        { id: 3, name: "furniture" },
        { id: 4, name: "groceries" },
        { id: 5, name: "home-decoration" },
        { id: 6, name: "kitchen-accessories" },
        { id: 7, name: "laptops" },
        { id: 8, name: "mens-shirts" },
        { id: 9, name: "mens-shoes" },
        { id: 10, name: "mens-watches" },
        { id: 11, name: "mobile-accessories" },
        { id: 12, name: "motorcycle" },
        { id: 13, name: "skin-care" },
        { id: 14, name: "smartphones" },
        { id: 15, name: "sports-accessories" },
        { id: 16, name: "sunglasses" },
        { id: 17, name: "tablets" },
        { id: 18, name: "tops" },
        { id: 19, name: "vehicle" },
        { id: 20, name: "womens-bags" },
        { id: 21, name: "womens-dresses" },
        { id: 22, name: "womens-jewellery" },
        { id: 23, name: "womens-shoes" },
        { id: 24, name: "womens-watches" }
    ];

    return (
        <div>
            <div className="px-2 lg:sticky top-10">
                <div className="p-4">
                    <button
                        onClick={() => navigate(routes.home.path)}
                        className="block w-full p-2 overflow-auto text-gray-600 capitalize hover:text-gray-800 hover:shadow-lg hover:bg-slate-100 text-start"
                    >
                        All products
                    </button>
                </div>
                {categories.map((category) => (
                    <div key={category.id} className="p-4">
                        <button
                            onClick={() => navigate(`${routes.category.path}?${queryParams.CATEGORY_PRODUCTS}=${category.name}`)}
                            className="block w-full p-2 overflow-auto text-gray-600 capitalize hover:text-gray-800 hover:shadow-lg hover:bg-slate-100 text-start"
                        >
                            {category.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories