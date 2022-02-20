import React, { useState } from "react";
import { v4 } from "uuid";
import styles from "./todo.module.css";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const [todoValue, setTodoValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  return (
    <>
      <div className={styles.container}>
        <form>
          <input
            type="text"
            placeholder="Write Something"
            title="Todo"
            value={todoValue}
            onChange={(e) => setTodoValue(e.currentTarget.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              if (!todoValue) return alert(`Write a correct Todo`);
              setTodoList([...todoList, { todoValue, id: v4() }]);
              setTodoValue("");
            }}
          >
            +
          </button>
        </form>
        <TodoList todoList={todoList} setTodoList={setTodoList} />
        <p>Prashant's Todo List</p>
      </div>
    </>
  );
};
