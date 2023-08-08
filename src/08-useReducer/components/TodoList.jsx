import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem.jsx";

export const TodoList = ({ todoList = [] }) => {
  return (
    <>
      <ul className="list-group">
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} todoItem={todoItem} />
        ))}
      </ul>
    </>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object),
};
