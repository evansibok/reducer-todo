import React from "react";
import TodoCard from "./todoCard";

export default function TodoList({ todos, toggleComplete }) {
  return (
    <div>
      {todos &&
        todos.map(todo => (
          <TodoCard key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        ))}
    </div>
  );
}
