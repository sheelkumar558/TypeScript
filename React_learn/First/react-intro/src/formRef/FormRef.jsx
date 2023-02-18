import React from "react";
import { useState } from "react";

export const FormRef = () => {
  const [formData, setFormData] = useState({
    username: "",
    age: "",
    email: "",
    password: "",
  });
  const handleForm = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  console.log(formData);
  return (
    <div>
      <form>
        <input
          onChange={handleForm}
          type="text"
          placeholder="username"
          id="username"
        />
        <br />
        <input onChange={handleForm} type="number" placeholder="age" id="age" />
        <br />
        <input
          onChange={handleForm}
          type="email"
          placeholder="email"
          id="email"
        />
        <br />
        <input
          onChange={handleForm}
          type="password"
          placeholder="password"
          id="password"
        />
        <br />
        <input type="submit" placeholder="submit" />
      </form>
    </div>
  );
};
