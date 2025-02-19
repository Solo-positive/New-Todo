import React, { useContext, useState } from "react";


import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Home = () => {


  return (
    <div className="bg-gray-300 mx-auto p-4">
      <h1 className="mb-5 text-center text-4xl text-green-600 font-bold">
        Todo App
      </h1>
        <TodoForm />
      {/* Todo List Section */}
       <TodoList />
    </div>
  );
};

export default Home;
