import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import "./components/app.style.css";

interface Product {
  id: number;
  title: string;
  thumbnail: string;
}

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, SetcurrentPage] = useState<number>(0);
  // const [error, setError] = useState<string>("");
  const PAGE_SIZE = 10;

  const fetchProducts = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const total_Products = products.length;
  const No_of_Pages = Math.ceil(total_Products / PAGE_SIZE);
  const START = currentPage * PAGE_SIZE;
  const END = START + PAGE_SIZE;

  const HandelPageNumber = (n: number) => {
    SetcurrentPage(n);
  };

  const PrevPageHandel = () => {
    SetcurrentPage((prev) => prev - 1);
  };

  const NextPageHandel = () => {
    SetcurrentPage((prev) => prev + 1);
  };

  return !products.length ? (
    <h1>Nod products found</h1>
  ) : (
    <div className="App">
      <h1>Product List</h1>

      <div className="product-container">
        {products.slice(START, END).map((product) => (
          <ProductCard
            key={product.id}
            image={product.thumbnail}
            title={product.title}
          />
        ))}
      </div>
      <div className="pagination">
        <button
          disabled={currentPage == 0}
          onClick={PrevPageHandel}
          className="page-number"
        >
          Prev
        </button>
        {[...Array(No_of_Pages).keys()].map((n) => (
          <span
            key={n}
            className={`page-number ${currentPage === n ? "active" : ""}`}
            onClick={() => HandelPageNumber(n)}
          >
            {n}
          </span>
        ))}
        <button
          disabled={currentPage == No_of_Pages - 1}
          onClick={NextPageHandel}
          className="page-number"
        >
          Next
        </button>
      </div>
    </div>
  );
}
