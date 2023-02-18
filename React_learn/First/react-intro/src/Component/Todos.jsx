import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData();
  }, [page]);
  const getData = () => {
    fetch(`http://localhost:8080/todos?_page=${page}&_limit=3`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="enter todos"
      />
      <button
        onClick={() => {
          const payload = {
            title: text,
            status: false,
          };
          axios
            .post("http://localhost:8080/todos", payload)
            .then(() => getData());
        }}
      >
        Add Todos
      </button>
      {todos.map((t) => (
        <div key={t.id}>{t.title}</div>
      ))}
      <button onClick={() => setPage(page >= 2 ? page - 1 : page)}>prev</button>
      <button onClick={() => setPage(page + 1)}>next</button>
    </div>
  );
};
