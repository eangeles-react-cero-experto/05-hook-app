import { act, renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter.js";

describe("Test in useCounter", () => {
  it("should return the default values", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, incrementCounter, decrementCounter, resetCounter } =
      result.current;

    expect(counter).toBe(10);
    expect(incrementCounter).toEqual(expect.any(Function));
    expect(decrementCounter).toEqual(expect.any(Function));
  });

  it("should create a counter with a value of 100", () => {
    const { counter } = renderHook(() => useCounter(100)).result.current;
    expect(counter).toEqual(100);
  });

  it("should increment the counter", () => {
    const { result } = renderHook(() => useCounter(100));

    act(() => result.current.incrementCounter());
    act(() => result.current.incrementCounter());

    expect(result.current.counter).toEqual(102);
  });

  it("should decrement the counter", () => {
    const { result } = renderHook(() => useCounter(100));

    act(() => result.current.decrementCounter());
    act(() => result.current.decrementCounter());

    expect(result.current.counter).toEqual(98);
  });

  it("should reset the counter to its initial value", () => {
    const { result } = renderHook(() => useCounter(100));

    act(() => result.current.incrementCounter());
    act(() => result.current.incrementCounter());
    act(() => result.current.resetCounter());

    expect(result.current.counter).toEqual(100);
  });
});
