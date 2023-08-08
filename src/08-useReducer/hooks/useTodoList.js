import { useEffect, useReducer } from "react";
import { todoListReducer } from "../todoListReducer.js";

const init = () => {
  return JSON.parse(localStorage.getItem("todoList") || "[]");
};

export const useTodoList = (initialValue = []) => {
  const [todoList, dispatch] = useReducer(todoListReducer, initialValue, init);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const addNewTodoItem = (todoItem) => {
    const action = {
      type: "[TODO] Add todo item",
      payload: todoItem,
    };
    dispatch(action);
  };

  const deleteTodoItem = (id) => {
    const action = {
      type: "[TODO] Delete todo item",
      payload: id,
    };
    dispatch(action);
  };

  const toggleTodoItem = (id) => {
    const action = {
      type: "[TODO] Toggle todo item",
      payload: id,
    };
    dispatch(action);
  };

  return {
    todoList,
    todoItemsAmount: todoList.length,
    completedTodoItemsAmount: todoList.filter((todoItem) => todoItem.isDone)
      .length,
    pendingTodoItemsAmount: todoList.filter((todoItem) => !todoItem.isDone)
      .length,
    addNewTodoItem,
    deleteTodoItem,
    toggleTodoItem,
  };
};
