import PropTypes from "prop-types";
import { useState } from "react";

export const FormAddTodoItem = ({ onNewTodoItemAdded }) => {
  const [description, setDescription] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onNewTodoItemAdded({
      id: crypto.randomUUID(),
      description,
      isDone: false,
    });

    setDescription("");
  };

  const onInputChanged = (event) => {
    setDescription(event.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onInputChanged}
          value={description}
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
