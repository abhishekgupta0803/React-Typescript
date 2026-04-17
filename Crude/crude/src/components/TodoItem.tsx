import type { Todo } from "../types";

type Props = {
  todo: Todo;
  deleteTodo: (id: number) => void;
  editTodo: (todo: Todo) => void;
};

const TodoItem = ({ todo, deleteTodo, editTodo }: Props): React.ReactNode => {
  return (
    <li>
      {todo.text}

      <button onClick={() => editTodo(todo)}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;