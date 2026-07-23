import { useContext } from "react";
import { contextTodo } from "../context/TodoContext";

export const Context = () => {
  const context = useContext(contextTodo);

  if (!context) {
    throw new Error("Context data is not defined");
  }

  return context;
};
