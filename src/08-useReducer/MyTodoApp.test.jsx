import { useTodoList } from "./hooks/useTodoList.js";
import * as crypto from "crypto";
import { render, screen } from "@testing-library/react";
import { MyTodoApp } from "./MyTodoApp.jsx";

jest.mock("./hooks/useTodoList.js");

describe("Test MyTodoApp", () => {
  const todoList = [
    { id: crypto.randomUUID(), description: "Walk the dog", isDone: false },
    { id: crypto.randomUUID(), description: "Make dinner", isDone: true },
  ];
  useTodoList.mockReturnValue({
    todoList,
    todoItemsAmount: 2,
    completedTodoItemsAmount: 1,
    addNewTodoItem: jest.fn(),
    deleteTodoItem: jest.fn(),
    toggleTodoItem: jest.fn(),
  });

  it("should match with snapshot", () => {
    const { container } = render(<MyTodoApp />);
    expect(container).toMatchSnapshot();
  });

  it("should render render todo items", () => {
    render(<MyTodoApp />);
    expect(screen.getByText(todoList[0].description)).toBeTruthy();
    expect(screen.getByText(todoList[1].description)).toBeTruthy();
  });
});
