import { Child } from "./Child.jsx";
import { useCallback, useState } from "react";

export const Parent = () => {
  const numbers = [2, 4, 6, 8, 10];
  const [total, setTotal] = useState(0);

  const increment = useCallback((num) => {
    setTotal((value) => value + num);
  }, []);

  return (
    <div>
      <h1>Parent</h1>
      <p> Total: {total} </p>

      <hr />

      {numbers.map((n) => (
        <Child key={n} num={n} increment={increment} />
      ))}
    </div>
  );
};
