import { useTodo } from "../context/ContextTodo";
import ItemsTodo from "./ItemsTodo";


export const ListTodo = () => {
  const {todos} = useTodo();
   console.log("todos",todos)
  return (
   <ul>
     {
      todos.map((todo)=>(
        <li>
           <ItemsTodo key={todo.id} todo={todo} />
        </li>
       
      ))
     }
   </ul>
  
  )
}
