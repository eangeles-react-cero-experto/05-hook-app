import { FormAddTodoItem, TodoList } from "./components";
import { useTodoList } from "./hooks/useTodoList.js";

export const MyTodoApp = () => {
  const {
    todoList,
    todoItemsAmount,
    completedTodoItemsAmount,
    addNewTodoItem,
    deleteTodoItem,
    toggleTodoItem,
  } = useTodoList();

  return (
    <>
      <h1>
        MyTodoApp &nbsp;
        <small>
          ({completedTodoItemsAmount} / {todoItemsAmount})
        </small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-6">
          <TodoList
            todoList={todoList}
            onToggleTodoItem={toggleTodoItem}
            onDeleteTodoItem={deleteTodoItem}
          />
        </div>
        <div className="col-6">
          <h4>Add Todo</h4>
          <hr />

          <FormAddTodoItem onNewTodoItemAdded={addNewTodoItem} />
        </div>
      </div>
    </>
  );
};
