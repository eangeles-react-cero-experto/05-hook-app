import { useCallback, useState } from "react";
import { IncrementButton } from "./IncrementButton.jsx";

export const CallbackHookApp = () => {
  const [counter, setCounter] = useState(10);

  const incrementCounter = useCallback((amount = 1) => {
    setCounter((value) => value + amount);
  }, []);

  return (
    <>
      <h1>Callback Hook: {counter}</h1>
      <hr />
      <IncrementButton onClick={incrementCounter} />

      <button
        onClick={() => incrementCounter()}
        className="btn btn-outline-primary"
      >
        +1
      </button>
    </>
  );
};
