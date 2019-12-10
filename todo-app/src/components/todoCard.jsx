import React from "react";

export default function TodoCard({ todo, toggleComplete }) {
  return (
    <p
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
      onClick={() => toggleComplete(todo.id)}
    >
      {todo.item}
    </p>
  );
}
