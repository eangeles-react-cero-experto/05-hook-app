import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHookApp = () => {
  const { counter, incrementCounter, decrementCounter, resetCounter } =
    useCounter();

  return (
    <>
      <h1>Counter with Custom Hook: {counter}</h1>

      <hr />

      <button onClick={() => decrementCounter()} className="btn btn-primary">
        -1
      </button>
      <button onClick={() => resetCounter()} className="btn btn-primary">
        Reset
      </button>
      <button onClick={() => incrementCounter()} className="btn btn-primary">
        +1
      </button>
    </>
  );
};
