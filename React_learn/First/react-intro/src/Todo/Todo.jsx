import React from "react";
import { useState } from "react";
import { InputTodo } from "./InputTodo";

export const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const getData = (todo) => {
    setTodoList([...todoList, todo]);
  };
  return (
    <div>
      <InputTodo getData={getData} />
      {todoList.map((e) => (
        <div>{e}</div>
      ))}
    </div>
  );
};
