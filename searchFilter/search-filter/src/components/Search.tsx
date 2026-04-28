import { useState } from "react";
import  {foodData}  from "./Api";
import type { FoodItems } from "./data.type";
import "./search.style.css"

const Search = () => {
  const [data, setData] = useState<FoodItems[]>(foodData as FoodItems[]);
  const [store , setStore] = useState<string>("");
 

  const handelInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setStore(e.target.value)
  }

  const filterData = data.filter((food)=>(
        food.name.toLowerCase().includes(store) || 
         food.brand.toLowerCase().includes(store)
  ))

  return (
    <div className="border">
      <div className="search-box">
        <input type="text" placeholder="Search..."  onChange={handelInput}/>
      </div>
      <div className="header">
        <p>Name</p>
        <p>Brand</p>
        <p>Image</p>
      </div>
      <div className="data-container">
        {filterData.map((curr) => (
           
          <div  className="title" key={curr.name}>
            <p> { curr.name}</p> 
            <p>{curr.brand}</p>
            <p><img src={curr.img} alt={curr.name}  /></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
