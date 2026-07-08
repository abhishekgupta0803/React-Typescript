import { useEffect, useState } from "react";
import type { Products } from "../Types/product.type";
import { getProducts } from "../services/api";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { ProductCards } from "../components/ProductCards";
import SearchBar from "../components/SearchBar";
import Category from "../components/Category";
import ProductsSorted from "../components/ProductsSorted";
import Pagination from "../components/Pagination";

const ProductList = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setloading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [category, setCategory] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [current, setCurrent] = useState<number>(1);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      setloading(true);
      const data = await getProducts();

      setProducts(data);
      // console.log(data);
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    } finally {
      setloading(false);
    }
  };

  if (error) {
    return <Error message={error} />;
  }
  if (loading) {
    return <Loading />;
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const sortProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return a.price - b.price;
    }

    if (sortOrder === "highToLow") {
      return b.price - a.price;
    }

    return 0;
  });

  //pagination 
  const productPerPage:number = 5;
  const totalPages:number = Math.ceil (sortProducts.length / productPerPage);
 
  const lastIndex:number = productPerPage * current;
  const firstIndex:number = lastIndex - productPerPage; 

  const pagination = sortProducts.slice(firstIndex , lastIndex);

 



  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="mx-auto max-w-7xl px-4">
        {/* Search */}
        <SearchBar value={search} onChange={setSearch} />

        {/* Category & Sort */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Category category={category} setCategory={setCategory} />

          <ProductsSorted sortOrder={sortOrder} setSortOrder={setSortOrder} />
        </div>

        {/* Products Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pagination.length > 0 ? (
            pagination.map((product) => (
              <ProductCards key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center text-xl font-semibold text-gray-500">
              No products found.
            </div>
          )}
        </div>
      </div>
      <Pagination current={current} setCurrent={setCurrent}  totalPages={totalPages} productPerPage={productPerPage} />
    </div>
  );
};

export default ProductList;
