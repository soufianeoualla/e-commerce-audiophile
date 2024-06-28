import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import ProductPage from "./pages/ProductPage";
import Checkout from "./pages/Checkout";
import CategoryPage from "./pages/CategoryPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/:category" element={<CategoryPage />} />

              <Route path="/product/:name" element={<ProductPage />} />
            </Route>

            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </div>
      <Toaster/>
    </>
  );
}

export default App;
