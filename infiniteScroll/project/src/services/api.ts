import axios from "axios";
import type { Users } from "../types/users";

const api = axios.create({
  baseURL: "https://api.github.com",
});


export const getUsers = async () =>{
   const res = await api.get<Users[]>("/users");
   return res;
}