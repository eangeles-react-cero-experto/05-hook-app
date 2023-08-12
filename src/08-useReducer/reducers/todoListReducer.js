export const todoListReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add todo item":
      return [...initialState, action.payload];
    case "[TODO] Delete todo item":
      return initialState.filter((todoItem) => todoItem.id !== action.payload);
    case "[TODO] Toggle todo item":
      return initialState.map((todoItem) => {
        if (todoItem.id === action.payload) todoItem.isDone = !todoItem.isDone;
        return todoItem;
      });
    default:
      return initialState;
  }
};
