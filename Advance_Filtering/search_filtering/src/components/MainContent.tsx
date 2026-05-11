import { useEffect, useState } from "react";
import { UseFilter } from "./FilterContext";
import { Tally3 } from "lucide-react";
import axios from "axios";
import BookCard from "./BookCard";
import { useDebounce } from "./Debouncing";

const MainContent = () => {
  
  const { searchQuery, selectedCategory, minPrice, maxPrice, keyword } =
    UseFilter();
  const [products, setProducts] = useState<any[]>([]);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const itemsPerPage = 12;
  const debouncedSearchQuery = useDebounce(searchQuery, 1000);

  useEffect(() => {
    let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`;

    if (keyword) {
      url = `https://dummyjson.com/products/search?q=${keyword}`;
    }
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.products);
        // console.log(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, [currentPage, keyword]);

  //categories
  const getFilteredProducts = () => {
    // console.log(products)
    let filterProducts = products;

    if (selectedCategory) {
      // console.log(selectedCategory)
      filterProducts = filterProducts.filter(
        (product) => product.category === selectedCategory,
      );
    }

    if (minPrice !== undefined) {
      filterProducts = filterProducts.filter(
        (product) => product.price >= minPrice,
      );
    }

    if (maxPrice !== undefined) {
      filterProducts = filterProducts.filter(
        (product) => product.price <= maxPrice,
      );
    }

    //debouncing concept
    if (debouncedSearchQuery) {
    
      console.log("debouncing =>",debouncedSearchQuery)
      filterProducts = filterProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
    

    //dropdown lists
    switch (filter) {
      case "expensive":
        return filterProducts.sort((a, b) => b.price - a.price);
      case "cheap":
        return filterProducts.sort((a, b) => a.price - b.price);
      case "popular":
        return filterProducts.sort((a, b) => b.rating - a.rating);
      default:
        return filterProducts;
    }
  };

  const filteredProducts = getFilteredProducts();
  // console.log(filteredProducts);

  //pagination
  const totalProducts = 100;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const handelPageChange = (page : number)=>{
       if(page > 0 && page <= totalPages){
        setCurrentPage(page);
       }
  }

  //pagination
  const getPaginationButtons = ()=>{
    const buttons:number[] = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages , currentPage + 2);

    if(currentPage - 2 < 1){
      endPage = Math.min(totalPages , endPage + (2 - currentPage -1));
    }

    if(currentPage + 2 > totalPages){
      startPage = Math.min(1,startPage -(2 - totalPages -  currentPage ));
    }

    for(let page = startPage; page <= endPage; page++){
      buttons.push(page);
    }

    return buttons;
  };

 return (
  <section className="xl:w-[55rem] mr-[10rem] lg:w-[55rem] sm:w-[40rem] xs:w-[20rem] p-5">
    
    {/* Top Filter Button */}
    <div className="w-full flex justify-end mb-5">
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="border px-4 py-2 rounded-full flex items-center"
        >
          <Tally3 className="mr-2" />
          {filter === "all"
            ? "Filter"
            : filter.charAt(0).toLowerCase() + filter.slice(1)}
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 bg-white border border-gray-300 rounded mt-2 w-40 shadow-lg z-10">
            <button
              onClick={() => {
                setFilter("cheap");
                setDropdownOpen(false);
              }}
              className="block px-4 py-2 w-full text-left hover:bg-gray-200"
            >
              Cheap
            </button>

            <button
              onClick={() => {
                setFilter("expensive");
                setDropdownOpen(false);
              }}
              className="block px-4 py-2 w-full text-left hover:bg-gray-200"
            >
              Expensive
            </button>

            <button
              onClick={() => {
                setFilter("popular");
                setDropdownOpen(false);
              }}
              className="block px-4 py-2 w-full text-left hover:bg-gray-200"
            >
              Popular
            </button>
          </div>
        )}
      </div>
    </div>

    {/* Products */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
      {filteredProducts.map((product) => (
        <BookCard
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.thumbnail}
          price={product.price}
          
        />
      ))}
    </div>

    {/* Pagination */}
    <div className="flex flex-col sm:flex-row justify-between items-center mt-5">
      <button
        disabled={currentPage === 1}
        onClick={() => handelPageChange(currentPage - 1)}
        className="border px-4 py-2 mx-2 rounded-full"
      >
        Previous
      </button>

      <div className="flex flex-wrap justify-center">
        {getPaginationButtons().map((page) => (
          <button
            key={page}
            onClick={() => handelPageChange(page)}
            className={`border px-4 py-2 mx-1 rounded-full ${
              page === currentPage ? "bg-black text-white" : ""
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        disabled={currentPage === totalPages}
        onClick={() => handelPageChange(currentPage + 1)}
        className="border px-4 py-2 mx-2 rounded-full"
      >
        Next
      </button>
    </div>
  </section>
);
};

export default MainContent;
