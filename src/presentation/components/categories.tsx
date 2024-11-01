import { useNavigate } from "react-router-dom";
import categories from "../../application/constants/categories";
import { routes } from "../../application/constants/routes";
import params from "../../application/constants/params";

const Categories = () => {

    const navigate = useNavigate();

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
                            onClick={() => navigate(`${routes.category.path}?${params.CATEGORY}=${category.name}`)}
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