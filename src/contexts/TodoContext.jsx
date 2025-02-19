import React, { useEffect, useReducer, useContext, useState } from "react";
import todoReducer from "../reducers/todoReducer";
import axios from "axios";

export const TodoContext = React.createContext()

export const TodoProvider = ({children}) => {
    const [todos, dispatch] = useReducer(todoReducer, [])
    const [input, setInput] = useState("");
    const [currentTodo, setCurrentTodo] = useState(null)

      useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
          dispatch({ type: "GET", todos: res.data.splice(0, 10) });
        });
      }, []);

        const addUserHandler = () => {
          if (currentTodo) {
            updateTodoHandler(currentTodo.id, input);
          } else {
            // UI Update
            dispatch({
              type: "ADD",
              todo: { id: Date.now(), title: input },
            });
            // API Call
          }
          setInput("");
          setCurrentTodo(null);
        };

        const deleteUserHandler = (id) => {
            // UI Update
            dispatch({
                type: "DELETE",
                id,
            });
            // API Call
            axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        }

        const clearTodoHandler = () => {
            // UI Update
            dispatch({
                type: "CLEAR",
            });
            // API Call
        }

        const doneTodoHandler = (id) => {
            // UI Update
            dispatch({
                type: "DONE",
                id,
            });
            // API Call
        }

         const updateTodoHandler = (id, title) => {
           // UI Update
           dispatch({
             type: "UPDATE",
             todo: { id, title },
           });
           // API Call
         };
    return (
      <TodoContext.Provider value={{ todos, dispatch, doneTodoHandler, clearTodoHandler, addUserHandler, deleteUserHandler, setInput, setCurrentTodo, updateTodoHandler, currentTodo, input}}>
        {children}
      </TodoContext.Provider>
    );
}