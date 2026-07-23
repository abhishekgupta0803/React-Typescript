import { Context } from "../customhook/CustomHook";
import ItemsForm from "./ItemsForm";

const ListForms = () => {
  const { todos } = Context();

  return (
    <div>
      {todos.map((todo) => (
        <ul key={todo.id}>
          {<ItemsForm todo={todo} />}
        </ul>
      ))}
    </div>
  );
};

export default ListForms;
