import type React from "react";

type Props = {
  input: string;
  setInput: (value: string) => void;
  addTodo: () => void;
  updateTodo: () => void;
  editId: number | null;
};

const TodoInput = ({
  input,
  setInput,
  addTodo,
  updateTodo,
  editId,
}: Props): React.ReactNode => {
  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />

      <button onClick={editId ? updateTodo : addTodo}>
        {editId ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default TodoInput;