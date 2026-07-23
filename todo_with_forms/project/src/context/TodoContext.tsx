import type React from "react";
import type { ContextType, Todos } from "../types/todo";
import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const contextTodo = createContext<ContextType | null>(null);

const TodoContext = ({ children }: { children: React.ReactNode }) => {
  //get data into local storage
  const [todos, setTodos] = useState<Todos[]>(() => {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
  });

  const addTodos = (text: string) => {
    const newTodos: Todos = {
      id: uuidv4(),
      text,
    };

    setTodos((prev) => [...prev, newTodos]);
  };

  const deleteTodos = (id: string) => {
    setTodos((prev) => prev.filter((p) => p.id !== id));
  };

  const updateTodos = (id: string, text: string) => {
    setTodos((prev) => prev.map((p) => (p.id === id ? { ...p, text } : p)));
  };

  //save data into local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  addTodos;

  return (
    <contextTodo.Provider value={{todos, addTodos, deleteTodos, updateTodos }}>
      {children}
    </contextTodo.Provider>
  );
};

export default TodoContext;
