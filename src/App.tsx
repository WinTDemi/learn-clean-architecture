import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./presentation/components/layout";
import AppRoute from "./application/routes";
// import { testmock } from "./application/APIs/apiProducts/getProducts";

const App = () => {
  return (
    <Router>
      <Layout>
        <AppRoute />
      </Layout>
    </Router>
  );
};

export default App;


