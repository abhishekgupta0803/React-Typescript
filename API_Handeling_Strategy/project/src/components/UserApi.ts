import { apiClient } from "./apiClient";

export const getUsers = async () => {
  return apiClient("https://jsonplaceholder.typicode.com/users");
};