import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem.jsx";

export const TodoList = ({
  todoList = [],
  onDeleteTodoItem,
  onToggleTodoItem,
}) => {
  return (
    <>
      <ul className="list-group">
        {todoList.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            onToggleTodoItem={onToggleTodoItem}
            onDeleteTodoItem={onDeleteTodoItem}
          />
        ))}
      </ul>
    </>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object),
  onToggleTodoItem: PropTypes.func.isRequired,
  onDeleteTodoItem: PropTypes.func.isRequired,
};
