import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todoList, setTodoList }) => {
  const onDeleteTodo = (todo) => {
    const newTodo = todoList.filter((el) => todo.id !== el.id);
    setTodoList(newTodo);
  };
  return (
    <>
      <ul>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
        ))}
      </ul>
    </>
  );
};
