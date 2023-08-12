import { act, renderHook } from "@testing-library/react";
import { useForm } from "./useForm.js";

describe("Test in useForm", () => {
  const initialFormState = {
    name: "John Due",
    email: "john@emailc.com",
  };

  it("should return the default values", () => {
    const { result } = renderHook(() => useForm(initialFormState));
    expect(result.current).toEqual({
      formState: { ...initialFormState },
      onInputChanged: expect.any(Function),
      resetForm: expect.any(Function),
    });
  });

  it("should change the form state on input change", () => {
    const newValue = "john123@email.com";
    const event = { target: { name: "email", value: newValue } };
    const { result } = renderHook(() => useForm(initialFormState));

    act(() => result.current.onInputChanged(event));

    expect(result.current.formState).toEqual({
      ...initialFormState,
      email: newValue,
    });
  });

  it("should reset the form", () => {
    const newValue = "john123@email.com";
    const event = { target: { name: "email", value: newValue } };
    const { result } = renderHook(() => useForm(initialFormState));

    act(() => result.current.onInputChanged(event));
    act(() => result.current.resetForm());

    expect(result.current.formState).toEqual({ ...initialFormState });
  });
});
