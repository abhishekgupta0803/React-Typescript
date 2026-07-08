import axios from "axios";

const res = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const getProducts = async () => {
  const response = await res.get("/products");

  return response.data;
};

export const getSingleProduct = async (id: string) => {
  const response = await res.get(`/products/${id}`);
  return response.data;
};
