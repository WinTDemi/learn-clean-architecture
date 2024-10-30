import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Categories from "../components/categories";
import { ProductsPage } from "../pages/productsPage";
import DetailProductPage from "../pages/detailProductPage";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Categories />
        <div className="lg:basis-5/6 basis-full">
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/category" element={<ProductsPage />} />
            <Route path="/detail" element={<DetailProductPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
