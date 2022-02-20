import React, { useState } from "react";
import styles from "./todo.module.css";
import image from "../delete.png";

export const TodoItem = ({ todo, onDeleteTodo }) => {
  const [status, setStatus] = useState(false);

  const changeStatus = () => {
    setStatus(!status);
  };
  return (
    <>
      <li>
        <img src={image} alt="DELETE" onClick={() => onDeleteTodo(todo)} />
        <span
          className={status ? styles.green : styles.blue}
          onClick={changeStatus}
        ></span>
        <p className={status ? styles.strike : styles.normal}>
          {todo.todoValue}
        </p>
      </li>
    </>
  );
};
