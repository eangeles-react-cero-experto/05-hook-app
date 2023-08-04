import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    incrementCounter,
    decrementCounter,
    resetCounter,
  };
};
