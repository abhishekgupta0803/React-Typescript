import { useState } from "react";
import { context } from "./contextType";
import type { Products } from "../types/products";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Products[]>([]);
  const [search, setSearch] = useState<string>("");
  const [categories, setCategories] = useState<string>("all");
  const [sort, setSort] = useState<string>("");

  return (
    <context.Provider
      value={{
        products,
        setProducts,
        search,
        setSearch,
        categories,
        setCategories,
        sort,
        setSort,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
