export const todoListReducer = (initialState = [], action) => {
  switch (action.type) {
    case "ABC":
      throw new Error("Action.type = ABC is no yet implemented");
    default:
      return initialState;
  }
};
