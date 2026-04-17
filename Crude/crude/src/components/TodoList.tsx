import type{ Todo } from "../types";
import TodoItem from "./TodoItem";

type Props = {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  editTodo: (todo: Todo) => void;
};

const TodoList = ({ todos, deleteTodo, editTodo }: Props): React.ReactNode => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;