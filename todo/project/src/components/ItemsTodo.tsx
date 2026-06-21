import { useState } from "react";
import type { Todos } from "../types/Todo";
import { useTodo } from "../context/ContextTodo";
import "../css/style.css"

interface props {
  todo: Todos;
}

const ItemsTodo = ({ todo }: props) => {
  const { deleteTodo, updateTodo } = useTodo();
  const [isEditing, setEditing] = useState<boolean>(false);
  const [textUpdate, setTextUpdate] = useState(todo.text);

  const handelEditTodo = () => {
    updateTodo(todo.id, textUpdate);
    setEditing(false);
    // console.log(textUpdate)
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            placeholder="Enter Update Value"
            value={textUpdate}
            onChange={(e: any) => setTextUpdate(e.target.value)}
          />
          <button  onClick={handelEditTodo}>save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default ItemsTodo;
