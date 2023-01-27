import { useRef, useState } from "react";

export const useList = (arr) => {
  const [list, setList] = useState(arr);
  const defaultArr = useRef(arr);

  const push = (el) => {
    setList([...list, el]);
  };

  const pop = () => {
    let newArr = [...list];
    newArr.pop();
    setList(newArr);
  };

  const clear = () => {
    setList([]);
  };

  const reset = () => {
    setList(defaultArr.current);
  };

  const map = (fn) => {
    const x = [];
    for (let i = 0; i < list.length; i++) {
      const op = fn(list[i]);
      x.push(op);
    }
    setList(x);
  };

  return [list, { push, pop, clear, reset, map }];
};
