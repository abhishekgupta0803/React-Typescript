import type { Products } from "../types/products";
import { api } from "./baseurl";

export const getProducts = async () => {
  const res = await api.get<Products[]>("/products");
  // console.log(res)
  return res.data;
};
