import { useState } from "react";
import type{ Todo } from "../src/types";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = ():React.ReactNode => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");
  const [editId, setEditId] = useState<number | null>(null);

  // CREATE
  const addTodo = (): void => {
    if (!input.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: input,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  // DELETE
  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  // EDIT
  const editTodo = (todo: Todo): void => {
    setInput(todo.text);
    setEditId(todo.id);
  };

  // UPDATE
  const updateTodo = (): void => {
    setTodos(
      todos.map((t) =>
        t.id === editId ? { ...t, text: input } : t
      )
    );

    setInput("");
    setEditId(null);
  };

  return (
    <div>
      <h1>Todo CRUD App</h1>

      <TodoInput
        input={input}
        setInput={setInput}
        addTodo={addTodo}
        updateTodo={updateTodo}
        editId={editId}
      />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default App;