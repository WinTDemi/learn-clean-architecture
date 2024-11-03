import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./presentation/components/layout";
import AppRoute from "./presentation/routes";

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


