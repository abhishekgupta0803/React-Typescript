import { createContext } from "react";
import type { Products } from "../types/products";

export interface ContextTypes {
  products: Products[];
  setProducts: React.Dispatch<React.SetStateAction<Products[]>>;

  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;

  categories: string;
  setCategories: React.Dispatch<React.SetStateAction<string>>;

  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}


export const context = createContext<ContextTypes | null>(null);