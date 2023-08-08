import { useReducer } from "react";
import { todoListReducer } from "./todoListReducer.js";
import { FormAddTodoItem, TodoList } from "./components";

const initialState = [
  {
    id: crypto.randomUUID(),
    description: "Collect the soul stone",
    isDone: false,
  },
  {
    id: crypto.randomUUID(),
    description: "Collect the power stone",
    isDone: false,
  },
];

export const MyTodoApp = () => {
  const [state, dispatch] = useReducer(todoListReducer, initialState);

  const handleNewTodoItemAdded = (todoItem) => {
    console.log("todoItem: ", todoItem);
  };

  return (
    <>
      <h1>MyTodoApp (10)</h1>
      <hr />

      <div className="row">
        <div className="col-6">
          <TodoList todoList={state} />
        </div>
        <div className="col-6">
          <h4>Add Todo</h4>
          <hr />

          <FormAddTodoItem onNewTodoItemAdded={handleNewTodoItemAdded} />
        </div>
      </div>
    </>
  );
};
