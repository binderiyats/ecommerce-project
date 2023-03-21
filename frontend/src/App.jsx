import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Products } from "./pages/Products";
import { SingleProduct } from "./pages/SingleProduct";
import { PublicLayout } from "./layouts/PublicLayout";
import { PrivateLayout } from "./layouts/PrivateLayout";
import { Dashboard } from "./admin/pages/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path=":id" element={<SingleProduct />} />
        </Route>
      </Route>

      <Route path="/admin" element={<PrivateLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
