import { todoListReducer } from "./todoListReducer.js";
import * as crypto from "crypto";

describe("Test todoListReducer", () => {
  const initialState = [
    {
      id: crypto.randomUUID(),
      description: "Walk the dog",
      isDone: false,
    },
  ];

  it("should return the initial state", () => {
    const state = todoListReducer(initialState, {});
    expect(state).toBe(initialState);
  });

  it("should add a todo item", () => {
    const newTodoItem = {
      id: crypto.randomUUID(),
      description: "Make dinner",
      isDone: false,
    };
    const action = {
      type: "[TODO] Add todo item",
      payload: newTodoItem,
    };

    let state = todoListReducer(initialState, {});
    state = todoListReducer(state, action);

    expect(state.length).toEqual(2);
    expect(state).toContain(newTodoItem);
  });

  it("should delete a todo item", () => {
    let state = todoListReducer(initialState, {});
    const action = {
      type: "[TODO] Delete todo item",
      payload: state[0].id,
    };
    state = todoListReducer(state, action);

    expect(state.length).toEqual(0);
  });

  it("should toggle a todo item", () => {
    let state = todoListReducer(initialState, {});
    const action = {
      type: "[TODO] Toggle todo item",
      payload: state[0].id,
    };

    state = todoListReducer(state, action);
    expect(state[0].isDone).toEqual(true);

    state = todoListReducer(state, action);
    expect(state[0].isDone).toEqual(false);
  });
});
