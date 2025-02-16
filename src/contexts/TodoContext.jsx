import React, { useEffect, useReducer } from "react";
import todoReducer from "../reducers/todoReducer";
import axios from "axios";

export const TodoContext = React.createContext()

export const TodoProvider = ({children}) => {
    const [todos, dispatch] = useReducer(todoReducer, [])

      useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
          dispatch({ type: "GET", todos: res.data.splice(0, 10) });
        });
      }, []);
    return (
      <TodoContext.Provider value={{ todos, dispatch }}>
        {children}
      </TodoContext.Provider>
    );
}