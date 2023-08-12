import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "./TodoItem.jsx";
import * as crypto from "crypto";

describe("Test in TodoItem", () => {
  let todoItem;
  const mockOnToggleTodoItem = jest.fn();
  const mockOnDeleteTodoItem = jest.fn();

  beforeEach(() => jest.clearAllMocks());
  beforeEach(() => {
    todoItem = {
      id: crypto.randomUUID(),
      description: "Walk the dog",
      isDone: false,
    };
  });

  it("should match with snapshot", () => {
    const { container } = render(
      <TodoItem
        todoItem={todoItem}
        onToggleTodoItem={mockOnToggleTodoItem}
        onDeleteTodoItem={mockOnDeleteTodoItem}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("should show a uncompleted todo item without marked", () => {
    render(
      <TodoItem
        todoItem={todoItem}
        onToggleTodoItem={mockOnToggleTodoItem}
        onDeleteTodoItem={mockOnDeleteTodoItem}
      />,
    );

    const spanElement = screen.getByText(todoItem.description);
    expect(spanElement.classList).not.toContain("text-decoration-line-through");
  });

  it("should show a completed todo item as marked", () => {
    todoItem.isDone = true;
    render(
      <TodoItem
        todoItem={todoItem}
        onToggleTodoItem={mockOnToggleTodoItem}
        onDeleteTodoItem={mockOnDeleteTodoItem}
      />,
    );

    const spanElement = screen.getByText(todoItem.description);
    expect(spanElement.classList).toContain("text-decoration-line-through");
  });

  it("should call onToggleTodoItem when li is click", () => {
    render(
      <TodoItem
        todoItem={todoItem}
        onToggleTodoItem={mockOnToggleTodoItem}
        onDeleteTodoItem={mockOnDeleteTodoItem}
      />,
    );

    const liElement = screen.getByRole("listitem");
    fireEvent.click(liElement);

    expect(mockOnToggleTodoItem).toHaveBeenCalledTimes(1);
  });

  it("should call onDeleteTodoItem when remove button is click", () => {
    render(
      <TodoItem
        todoItem={todoItem}
        onToggleTodoItem={mockOnToggleTodoItem}
        onDeleteTodoItem={mockOnDeleteTodoItem}
      />,
    );

    const removeBtn = screen.getByRole("button", { name: "Remove" });
    fireEvent.click(removeBtn);

    expect(mockOnDeleteTodoItem).toHaveBeenCalledTimes(1);
  });
});
