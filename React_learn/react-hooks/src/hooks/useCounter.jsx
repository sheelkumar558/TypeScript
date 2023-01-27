import { useState } from "react";

export const useCounter = (init) => {
  const [value, setValue] = useState(init);

  const inc = (by = 1) => {
    setValue(value + by);
  };

  const dec = (by = 1) => {
    setValue(value - by);
  };

  const set = (to) => {
    setValue(to);
  };

  return { value, inc, dec, set };
};
