const initialState = [
  {
    id: 1,
    description: "Collect the soul stone",
    isDone: false,
  },
];

const todoListReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo item") {
    return [...state, action.payload];
  }

  return state;
};

let todoList = todoListReducer();
const newTodoItem = {
  id: 2,
  description: "Collect the power stone",
  isDone: false,
};

const addTodoItemAction = {
  type: "[TODO] add todo item",
  payload: newTodoItem,
};
todoList = todoListReducer(todoList, addTodoItemAction);

console.log("todoList: ", todoList);
