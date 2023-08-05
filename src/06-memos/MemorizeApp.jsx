import { useState } from "react";
import { useCounter } from "../hooks";
import { StrongText } from "./StrongText.jsx";

export const MemorizeApp = () => {
  const { counter, incrementCounter } = useCounter(10);
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <h1>
        Counter: <StrongText text={`${counter}`} />
      </h1>
      <hr />

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
