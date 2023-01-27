import React, { useState } from "react";
import { v4 as uuid } from "uuid";
export const TodoInput = ({ onClick }) => {
  const [text, setText] = useState("");
  const handleAdd = () => {
    const payload = {
      id: uuid(),
      title: text,
      status: false,
    };
    onClick(payload);
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
