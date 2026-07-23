import { useForm } from "react-hook-form"
import * as z from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { Context } from "../customhook/CustomHook";

 export const todoValidate = z.object({
  text: z.string().min(3,"minimum 3 characters is required").max(10,"maximum 10 character is required"),
});

type Inputs = {
  text: string
}

export const AddForm = () => {
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    
  } = useForm<Inputs>({resolver: zodResolver(todoValidate)});

  const {addTodos} = Context();

  const onSubmit = (data: Inputs) => {
    addTodos(data.text);
    reset()
  };
  return (
   
    <form onSubmit={handleSubmit(onSubmit)}>
      <input  {...register("text")} />
      {errors.text && <p>{errors.text.message}</p>}
      <button>Add</button>
    </form>
  )
}
