const todoReducer = (todos, action) => {
  if (action.type === "GET") {
    return [...action.todos];
  }
   if (action.type === "ADD") {
      return [action.todo, ...todos];
   }
   if (action.type === "DELETE") {
      return todos.filter((todo) => todo.id !== action.id);
   }
   if (action.type === "CLEAR") {
      return [];
   }
   if (action.type === "DONE")
       return todos.map((todo) => {
           if (todo.id === action.id) {
               return { ...todo, completed: !todo.completed };
           }
           return todo;
       });
       if (action.type === "UPDATE") {
         return todos.map((todo) => {
           if (todo.id === action.todo.id) {
             return { ...todo, title: action.todo.title };
           }
           return todo;
         });
       }
  return todos;
};

export default todoReducer;
