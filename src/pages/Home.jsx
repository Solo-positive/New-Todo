import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/todoContext";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { FaRegPenToSquare } from "react-icons/fa6";

const Home = () => {
  const {
    todos,
    addUserHandler,
    clearTodoHandler,
    doneTodoHandler,
    setInput,
    deleteUserHandler,
    setCurrentTodo,
    currentTodo,
    input
  } = useContext(TodoContext);

    const handleEdit = (todo) => {
      setInput(todo.title);
      setCurrentTodo(todo);
    };

  return (
    <div className="bg-gray-300 mx-auto p-4">
      <h1 className="mb-5 text-center text-4xl text-green-600 font-bold">
        Todo App
      </h1>
      {/* Input section */}
      <form className="flex space-x-3 mx-auto justify-center">
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          className=" text-xl bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:w-[55%] "
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() => addUserHandler()}
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-lg px-6 py-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          {currentTodo ? "Update" : "Add"}
        </button>
      </form>
      {/* Todo List Section */}
      <div>
        <div className="flex justify-between items-center mt-5">
          <h1 className="text-green-600 font-bold text-3xl">Your Todo List</h1>
          <button
            onClick={() => clearTodoHandler()}
            type="button"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
          >
            Clear All
          </button>
        </div>
        <div>
          {todos.length === 0 ? (
            <p className="text-center text-gray-600 text-2xl mt-5">
              No Todos Available !!!
            </p>
          ) : (
            <ul>
              {todos.map((todo, index) => (
                <li
                  key={index}
                  className={`flex items-center justify-between my-2 py-2 px-4 rounded-lg shadow-sm ${
                    todo.completed ? "bg-gray-200" : "bg-gray-100"
                  }`}
                >
                  <p
                    className={`text-gray-800 text-lg md:text-xl lg:text-2xl ${
                      todo.completed
                        ? "line-through text-gray-500"
                        : "text-gray-800"
                    }`}
                  >
                    {todo.title}
                  </p>
                  <div className="flex space-x-4">
                    <button onClick={() => doneTodoHandler(todo.id)}>
                      <AiOutlineCheck className="hover:text-green-500 size-5 hover:size-6 md:size-6 md:hover:size-7" />
                    </button>
                    <button onClick={() => handleEdit(todo)}>
                      <FaRegPenToSquare className="hover:text-yellow-500 size-5 hover:size-6 md:size-6 md:hover:size-7" />
                    </button>
                    <button onClick={() => deleteUserHandler(todo.id)}>
                      <AiOutlineClose className="hover:text-red-600 size-5 hover:size-6 md:size-6 md:hover:size-7" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
