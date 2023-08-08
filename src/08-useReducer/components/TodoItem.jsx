import PropTypes from "prop-types";

export const TodoItem = ({ todoItem }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <span>{todoItem.description}</span>
        <button className="btn btn-sm btn-outline-danger">Remove</button>
      </li>
    </>
  );
};

TodoItem.propTypes = {
  todoItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }),
};
