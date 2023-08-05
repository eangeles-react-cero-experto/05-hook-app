import { useMemo, useState } from "react";
import { useCounter } from "../hooks";
import { StrongText } from "./StrongText.jsx";

const heavyFunction = (iterationsAmount = 100) => {
  for (let i = 0; i < iterationsAmount; i++) {
    console.log("here we go...");
  }

  return `${iterationsAmount} completed!`;
};

export const MemoHookApp = () => {
  const { counter, incrementCounter } = useCounter(4000);
  const [toggle, setToggle] = useState(true);

  const iterationsAmounts = useMemo(() => {
    console.log("useMemo called!");
    return heavyFunction(counter);
  }, [counter]);

  return (
    <>
      <h1>
        Counter: <StrongText text={`${counter}`} />
      </h1>
      <hr />

      <h4>{iterationsAmounts}</h4>

      <button onClick={() => incrementCounter()} className="btn btn-primary">
        +1
      </button>
      <button
        onClick={() => setToggle(!toggle)}
        className="btn btn-outline-primary"
      >
        Toggle: <strong>{JSON.stringify(toggle)}</strong>
      </button>
    </>
  );
};
