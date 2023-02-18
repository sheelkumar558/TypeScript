import React from "react";
import { useState } from "react";

export const InputTodo = ({ getData }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button
        onClick={() => {
          getData(text);
        }}
      >
        Add Todo
      </button>
    </div>
  );
};
