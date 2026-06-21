import { useState } from "react";
import { useTodo } from "../context/ContextTodo";

const FormTodo = () => {
  const { addTodo } = useTodo();
  const [addtodo, setAddTodo] = useState<string>("");

  const handelTodoForm = (e: any) => {
    e.preventDefault();
    addTodo(addtodo);
     setAddTodo("");
    // console.log(addTodo)
  };

  return (
    <div>
      <form onSubmit={handelTodoForm}>
        <input
          type="text"
          placeholder="Enter todos task.."
          value={addtodo}
          onChange={(e) => setAddTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default FormTodo;
