import type { Todos } from "../types/Todo";
import { createContext, useContext, useEffect, useState } from "react";

interface TodoContext {
  todos: Todos[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
}

const todoCreateContext = createContext<TodoContext | null>(null);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodo] = useState(() => {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(todos)
  
  }, [todos]);
  //addTodo
  const addTodo = (text: string) => {
    if(!text.trim()) return;
    const newTodo: Todos = {
      id: Date.now().toString(),
      text,
    };

    setTodo((prev: Todos[]) => [...prev, newTodo]);
  };

  //delete
  const deleteTodo = (id: string) => {
    setTodo((prev: Todos[]) => prev.filter((p) => p.id !== id));
  };

  //update
  const updateTodo = (id: string, text: string) => {
     if(!text.trim()) return ;
    setTodo((prev: Todos[]) =>
      prev.map((p) => (p.id === id ? {...prev, text} : p)),
    );
  };
//   const updateTodo = (id: string, text: string) => {
//   setTodo((prev: Todos[]) =>
//     prev.map((p) =>
//       p.id === id
//         ? { ...p, text: text }
//         : p
//     )
//   );
// };

  return (
    <todoCreateContext.Provider
      value={{ addTodo, deleteTodo, updateTodo, todos }}
    >
      {children}
    </todoCreateContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(todoCreateContext);
  if (!context) {
    throw new Error("useTodo must be used inside TodoProvider");
  }

  return context;
};
