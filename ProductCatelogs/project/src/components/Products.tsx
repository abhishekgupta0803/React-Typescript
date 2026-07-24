import { useEffect, useState } from "react";
import ContextHook from "../hooks/ContextHook";
import Categories from "./Categories";
import ProductsCards from "./ProductsCards";
import Search from "./Search";
import { Sort } from "./Sort";
import { getProducts } from "../service/api";
import { useDebounce } from "../hooks/Debounce";
import "../css/style.css";

const Products = () => {
  const { products, setProducts, categories, sort, search } = ContextHook();
  const [error, setError] = useState<string>();
  const debounceValue = useDebounce(search, 2000);
  //   console.log(products)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.log(error);
        setError("Something is wrong ...");
      }
    };
    fetchProducts();
  }, []);

  if (error) {
    <p>{error}</p>;
  }

  if (!products) {
    <p>Loading...</p>;
  }

  const searchProduct = products.filter((product) => {
    if (!debounceValue) return true;

    return product.title.toLowerCase().includes(debounceValue.toLowerCase());
  });

  if (sort === "asc") {
    searchProduct.sort((a, b) => a.price - b.price);
  }
  if (sort === "desc") {
    searchProduct.sort((a, b) => b.price - a.price);
  }

  const filterProducts = searchProduct.filter((p) => {
    if (categories === "all") return true;

    return p.category === categories;
  });

  return (
    <div>
      <div className="controls">
        <Search />
        <Sort />
        <Categories />
      </div>

      <div className="products">
        {filterProducts.map((product) => (
          <ProductsCards key={product.id} products={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
