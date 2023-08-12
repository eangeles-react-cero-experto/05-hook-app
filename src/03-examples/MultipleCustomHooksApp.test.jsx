import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooksApp } from "./MultipleCustomHooksApp.jsx";
import { useCounter, useFetch } from "../hooks/index.js";

jest.mock("../hooks/useFetch");
jest.mock("../hooks/useCounter");

describe("Test in MultipleCustomHooksApp", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    incrementCounter: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should match with snapshot", () => {
    useFetch.mockReturnValue({ data: null, isLoading: true, error: null });

    const { container } = render(<MultipleCustomHooksApp />);
    expect(container).toMatchSnapshot();
  });

  it("should show the default component", () => {
    render(<MultipleCustomHooksApp />);

    expect(screen.getByText("BreakingBad Quotes")).toBeTruthy();
    expect(screen.getByText("Loading...")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Next Quote" })).toBeTruthy();
  });

  it("should show a quote", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "John Due",
          quote: "Hello World",
        },
      ],
      isLoading: false,
      error: null,
    });

    render(<MultipleCustomHooksApp />);
    expect(screen.getByText("John Due")).toBeTruthy();
    expect(screen.getByText("Hello World")).toBeTruthy();

    const btnNextQuote = screen.getByRole("button", { name: "Next Quote" });
    expect(btnNextQuote.disabled).toEqual(false);
  });

  it("should call the increment function", () => {
    render(<MultipleCustomHooksApp />);
    const btnNextQuote = screen.getByRole("button", { name: "Next Quote" });
    fireEvent.click(btnNextQuote);
    expect(mockIncrement).toHaveBeenCalled();
  });
});
