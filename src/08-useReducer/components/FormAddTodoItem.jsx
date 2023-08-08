import PropTypes from "prop-types";
import { useState } from "react";

export const FormAddTodoItem = ({ onNewTodoItemAdded }) => {
  const [todoItem, setTodoItem] = useState({
    id: crypto.randomUUID(),
    description: "",
    isDone: false,
  });

  const onSubmit = (event) => {
    event.preventDefault();
    onNewTodoItemAdded(todoItem);
  };

  const onInputChanged = (event) => {
    setTodoItem({
      ...todoItem,
      id: crypto.randomUUID(),
      description: event.target.value,
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onInputChanged}
          type="text"
          placeholder="Description here"
          className="form-control"
        />

        <button type="submit" className="btn btn-outline-primary mt-3">
          Add Item
        </button>
      </form>
    </>
  );
};

FormAddTodoItem.propTypes = {
  onNewTodoItemAdded: PropTypes.func.isRequired,
};
