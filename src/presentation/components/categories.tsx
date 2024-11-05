import { useNavigate } from "react-router-dom";
import { routes } from "../../application/constants/constants.Routers";
import { queryParams } from "../../application/constants/constants.QueryParams";

const Categories = () => {

    const navigate = useNavigate(); // hook navigate to navigate to another page fillter by category

    const categories = [
        {
            id: 1,
            name: 'beauty'
        },
        {
            id: 2,
            name: 'fragrances'
        },
        {
            id: 3,
            name: 'groceries'
        },
        {
            id: 4,
            name: 'furniture'
        },
        {
            id: 5,
            name: 'womens-watches'
        },
        {
            id: 6,
            name: 'womens-dresses'
        },
        {
            id: 7,
            name: 'womens-bags'
        },
        {
            id: 8,
            name: 'vehicle'
        },
        {
            id: 9,
            name: 'tops'
        },
        {
            id: 10,
            name: 'tablets'
        },
        {
            id: 11,
            name: 'sunglasses'
        },
        {
            id: 12,
            name: 'sports-accessories'
        },
        {
            id: 13,
            name: 'smartphones'
        },
        {
            id: 14,
            name: 'skin-care'
        },
        {
            id: 15,
            name: 'motorcycle'
        },
        {
            id: 16,
            name: 'mobile-accessories'
        }
    ]

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