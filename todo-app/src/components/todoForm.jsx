import React from "react";

export default function TodoForm({
  text,
  onValueChange,
  addTodo,
  clearCompleted
}) {
  return (
    <div>
      <br />
      <input
        type="text"
        name="item"
        value={text}
        placeholder="Add Todo..."
        onChange={onValueChange}
      />
      <br />
      <br />
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}
