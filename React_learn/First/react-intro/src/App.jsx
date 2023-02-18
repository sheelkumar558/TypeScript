import React from "react";
// import { Todos } from "./Component/Todos";
// import { Counter } from "./Todo/Counter";
import { FormRef } from "./formRef/FormRef";
import { Navbar } from "./context/Navbar";
import { Card } from "./context/Card";
import { Counter } from "./useReducerC/Counter";
//import { Todo } from "./Todo/Todo";
// import { useState } from "react";
// import { Counter } from "./Component/counter";

// import { Ass1 } from "./Component/Ass1";
// import { Ass2 } from "./Component/Ass2";
const App = () => {
  // const [counter, setCounter] = useState(0);

  // const handleAdd = (value) => {
  //   setCounter(counter + value);
  // };
  return (
    <div>
      {/* <Ass1 />
      <Ass2 /> */}
      {/* <h1>Counter App</h1>
      <Counter counter={counter} />
      <button onClick={() => handleAdd(1)}> + 1</button>
      <button onClick={() => handleAdd(-1)}>- 1</button> */}
      {/* <Todo /> */}
      {/* <Todos /> */}
      {/* <Counter /> */}
      {/* <FormRef /> */}
      {/* <Navbar />
      <Card /> */}
      <Counter />
    </div>
  );
};
export default App;
