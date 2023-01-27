import React from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { Todos } from "./components/Todo/Todos";
const App = () => {
  return (
    <div className="App">
      <Counter />
      <br />
      <br />
      <br />
      <Todos />
    </div>
  );
};

export default App;
