const todoReducer = (todos, action) => {
  if (action.type === "GET") {
    return [...action.todos];
  }

  return todos;
};

export default todoReducer;
