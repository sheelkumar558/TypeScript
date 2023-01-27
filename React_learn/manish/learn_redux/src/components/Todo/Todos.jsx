import React, { useEffect } from "react";
import { TodoInput } from "./TodoInput";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoError,
  addTodoRequest,
  addTodoSuccess,
  getTodoError,
  getTodoRequest,
  getTodoSuccess,
} from "../../Redux/action";
import axios from "axios";
export const Todos = () => {
  const dispatch = useDispatch();
  const { todos, isLoading, isError } = useSelector((state) => state.data);

  const handleAdd = (payload) => {
    console.log(payload);
    addTodos(payload)
      .then(() => getTodos())
      .catch((error) => console.log(error));
  };

  const addTodos = (payload) => {
    const requestAction = addTodoRequest();
    dispatch(requestAction);
    return axios
      .postg(" http://localhost:8080/todos", payload)
      .then((res) => {
        const successAction = addTodoSuccess(res.data);
        dispatch(successAction);
      })
      .catch((err) => {
        const errorAction = addTodoError(err);
        dispatch(errorAction);
      });
  };

  const getTodos = () => {
    const requestAction = getTodoRequest();
    dispatch(requestAction);
    return axios
      .get(" http://localhost:8080/todos")
      .then((res) => {
        const successAction = getTodoSuccess(res.data);
        dispatch(successAction);
      })
      .catch((err) => {
        const errorAction = getTodoError(err);
        dispatch(errorAction);
      });
  };
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1>Todo</h1>
      <TodoInput onClick={handleAdd} />
      {todos.length &&
        todos.map((e) => {
          return <div key={e.id}>{e.title}</div>;
        })}
    </div>
  );
};
