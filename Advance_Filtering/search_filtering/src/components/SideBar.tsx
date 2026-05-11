import React, { useEffect, useState } from "react";
import { UseFilter } from "./FilterContext";

interface Products {
  category: string;
}

interface FetchResponse {
  products: Products[];
}

const SideBar = () => {
  const [categoryes, setCategoryes] = useState<string[]>([]);
  const [keywords] = useState<string[]>([
    "Apple",
    "Watch",
    "Fashion",
    "Trend",
    "Shoes",
    "Shirt",
  ]);

//   Fetch Api
  useEffect(() => {
    const FetchProducts = async () => {
      try {
      
        const response = await fetch("https://dummyjson.com/products");
        const data: FetchResponse = await response.json();
        console.log(data)

        const UniqueCategoryes = Array.from(
          new Set(data.products.map((product: Products) => product.category)),
        );
        setCategoryes(UniqueCategoryes);
      } catch (error) {
        console.error(error);
      }
    };

    FetchProducts();
  }, []);

  //using custom hook 
  const {
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        keyword,
        setKeyword,
  } = UseFilter();

  //min Price
  const HandelMinPrice = (e:React.ChangeEvent<HTMLInputElement>) =>{

    const value = e.target.value;

    setMinPrice(value ? parseFloat(value) : undefined);

  };

  //max price
  const HandelMaxPrice = (e:React.ChangeEvent<HTMLInputElement>) =>{

    const value = e.target.value;

    setMaxPrice(value ? parseFloat(value) : undefined);

  };

  //categories 
  const HandelRadioChangeCategoryes =  (category:string)=>{
    setSelectedCategory(category)
  }

  //keyword
  const HandelKeyword = (keyword : string)=>{
    setKeyword(keyword)
   
  }

  //reset
  const HandelResetFilter = ()=>{
    setSearchQuery("");
    setSelectedCategory("")
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setKeyword("");
  }

  return (
    <div className="w-64 p-5 h-screen">
      <h1 className="text-2xl font-bold mb-10 mt-4">React Store</h1>
      <section>
        <input
          type="text"
          className="border-2 rounded px-2 sm:mb-0"
          placeholder="Search Product"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
        />
        <div className="flex justify-center items-center">
          <input
            type="text"
            className="border-2 mr-2 px-5 py-3 mb-3 w-full"
            placeholder="Min"
            value={minPrice ?? ""}
            onChange={HandelMinPrice}
          />
          <input
            type="text"
            className="border-2 mr-2 px-5 py-3 mb-3 w-full"
            placeholder="Max"
             value={maxPrice ?? ""}
            onChange={HandelMaxPrice}
          />
        </div>
        {/* categories section */}
        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-3">Categories</h2>
        </div>
        <section>
          {categoryes.map((category, index) => (
            <label key={index} className="block mb-2">
              <input
                type="radio"
                name="category"
                value={category}
                className="mr-2 w-[16px] h-[16px]"
                checked={selectedCategory === category}
                
                onChange={()=>HandelRadioChangeCategoryes(category)}
              />
              {category.toUpperCase()}
            </label>
          ))}
        </section>
        {/* Keywords */}
        <div className="mb-5 mt-4">
          <h2 className="text-xl font-semibold mb-3">Keywords</h2>
          <div>
            {keywords.map((keyword, index) => (
              <button
                key={index}
                className="block mb-2 px-4 py-2 w-full text-left  border rounded hover:bg-gray-200"
                onClick={()=>HandelKeyword(keyword)}
              >
                {keyword.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        {/* reset Button */}
        <button onClick={HandelResetFilter} className="w-full mb-[4rem] py-2 bg-black text-white rounded mt-5">
          Reset Filter
        </button>
      </section>
    </div>
  );
};

export default SideBar;
