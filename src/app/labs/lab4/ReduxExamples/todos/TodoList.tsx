/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);

  return (
    <div>
      <h2>Todo List</h2>
      <ul className="list-group">
        <TodoForm />
        {todos.map((todo: any) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}
