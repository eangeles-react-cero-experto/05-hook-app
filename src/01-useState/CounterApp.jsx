import { useState } from "react";

export const CounterApp = () => {
  const [counters, setCounters] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  return (
    <>
      <h1>Counter1: {counters.counter1}</h1>
      <h1>Counter2: {counters.counter2}</h1>
      <h1>Counter3: {counters.counter3}</h1>

      <hr />

      <button
        onClick={() =>
          setCounters({ ...counters, counter1: counters.counter1 + 1 })
        }
        className="btn btn-primary"
      >
        +1
      </button>
    </>
  );
};
