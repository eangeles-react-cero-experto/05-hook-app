import { useReducer } from "react";
import { todoListReducer } from "./todoListReducer.js";

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

  return (
    <>
      <h1>MyTodoApp (10)</h1>
      <hr />

      <div className="row">
        <div className="col-6">
          {/* TodoList */}
          <ul className="list-group">
            {/* TodoItem */}
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>Item 1</span>
              <button className="btn btn-sm btn-outline-danger">Remove</button>
            </li>
            {/* TodoItem */}
            <li className="list-group-item">Item 2</li>
            <li className="list-group-item">Item 3</li>
          </ul>
          {/* TodoList */}
        </div>
        <div className="col-6">
          <h4>Add Todo</h4>
          <hr />
          {/* FromAddTodo onNewTodoItemAdded */}
          <form>
            <input
              type="text"
              placeholder="Description here"
              className="form-control"
            />

            <button type="submit" className="btn btn-outline-primary mt-3">
              Add Item
            </button>
          </form>
          {/* FormAddTodo */}
        </div>
      </div>
    </>
  );
};
