import PropTypes from "prop-types";

export const TodoItem = ({ todoItem, onToggleTodoItem, onDeleteTodoItem }) => {
  const onRemoveBtnClicked = (event) => {
    event.stopPropagation();
    onDeleteTodoItem(todoItem.id);
  };

  return (
    <>
      <li
        onClick={() => onToggleTodoItem(todoItem.id)}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`w-100 ${
            todoItem.isDone ? "text-decoration-line-through" : ""
          }`}
        >
          {todoItem.description}
        </span>
        <button
          onClick={onRemoveBtnClicked}
          className="btn btn-sm btn-outline-danger"
        >
          Remove
        </button>
      </li>
    </>
  );
};

TodoItem.propTypes = {
  todoItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.any,
    isDone: PropTypes.bool.isRequired,
  }),
  onToggleTodoItem: PropTypes.func.isRequired,
  onDeleteTodoItem: PropTypes.func.isRequired,
};
