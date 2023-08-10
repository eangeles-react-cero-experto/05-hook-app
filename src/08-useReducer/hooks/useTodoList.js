import { useEffect, useReducer } from "react";
import { todoListReducer } from "../todoListReducer.js";

const initializer = () => {
  return JSON.parse(localStorage.getItem("todoList") || "[]");
};

export const useTodoList = (initialValue = []) => {
  const [todoList, dispatch] = useReducer(
    todoListReducer,
    initialValue,
    initializer,
  );

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

  const todoItemsAmount = todoList.length;
  const completedTodoItemsAmount = todoList.filter((x) => x.isDone).length;
  const pendingTodoItemsAmount = todoList.filter((x) => !x.isDone).length;

  return {
    todoList,
    todoItemsAmount,
    completedTodoItemsAmount,
    pendingTodoItemsAmount,
    addNewTodoItem,
    deleteTodoItem,
    toggleTodoItem,
  };
};
