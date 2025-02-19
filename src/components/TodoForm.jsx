import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { TodoContext } from "../contexts/todoContext";

const TodoForm = () => {
    const {
      todos,
      addUserHandler,
      setInput,
      currentTodo,
      input,
    } = useContext(TodoContext);
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  return (
    <div>
      {/* Input section */}
      <form
        onSubmit={handleSubmit(addUserHandler)}
        className="flex space-x-3 mx-auto justify-center"
      >
        <input
          {...register("todo", { required: true, minLength: 3 })}
          type="text"
          placeholder="Add a todo"
          value={input}
          className=" text-xl bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 md:w-[55%] "
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-lg px-6 py-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          {currentTodo ? "Update" : "Add"}
        </button>
      </form>
      <div className="mx-auto md:w-[63%] lg:w-[61%]">
        {errors.todo?.type === "required" && (
          <p className="text-red-500 text-sm md:text-lg lg:text-xl">
            This field is required
          </p>
        )}

        {errors.todo?.type === "minLength" && (
          <p className="text-red-500 text-sm md:text-lg lg:text-xl">
            Minimum length is 3 characters
          </p>
        )}
      </div>
    </div>
  );
}

export default TodoForm