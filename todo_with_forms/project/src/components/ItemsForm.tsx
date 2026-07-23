import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Context } from "../customhook/CustomHook";
import type { Todos } from "../types/todo";

export const updateValidate = z.object({
  update: z
    .string()
    .min(3, "minimum 3 characters is required")
    .max(10, "maximum 10 character is required"),
});

type Inputs = {
  update: string;
};

type props = {
  todo: Todos;
};

const ItemsForm = ({ todo }: props) => {
  const { updateTodos , deleteTodos } = Context();
  const [isEditing, setEditing] = useState<boolean>(false);
  const [update, setUpdate] = useState<string>(todo.text);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(updateValidate) });

  const onSubmit = (data: Inputs) => {
    updateTodos(todo.id, data.update);
    setEditing(false);
    reset();
  };
  return (
    <div>
      {isEditing ? (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={update}{...register("update")} />
            {errors.update && <p>{errors.update.message}</p>}
            <button>Update</button>
          </form>
        </>
      ) : (
       <>
        <table border={2}>
          <tr>
            <th>Task</th>
             <th>Action</th>
          </tr>
          <tr>
            <td>{todo.text}</td>
            <td>
               <button onClick={()=>deleteTodos(todo.id)}>Delete</button>
        <button onClick={()=>setEditing(true)}>Edit</button>
            </td>
          </tr>
        </table>
       
       
       </>
      )}
    </div>
  );
};

export default ItemsForm;
