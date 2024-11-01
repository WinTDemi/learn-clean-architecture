import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./presentation/components/layout";
import AppRoute from "./presentation/routes";

const App = () => {
  return (
    <Router>
      <Layout>
        {/* <Routes>
          <Route index element={<ProductsPage />} />
          <Route path={routes.CATEGORY} element={<ProductsPage />} />
          <Route path={routes.DETAIL} element={<DetailProductPage />} />
        </Routes> */}
        <AppRoute />
      </Layout>
    </Router>
  );
};

export default App;


