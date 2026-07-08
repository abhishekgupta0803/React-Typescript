// import Category from "./components/Category";
import "./App.css";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList"
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App