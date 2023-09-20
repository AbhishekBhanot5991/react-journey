import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={addTodoHandler} className="text-center mt-4">
      <div className="flex items-center justify-center">
        <input type="text"
          className="w-2/3 p-2 border-2 border-gray-300 rounded-l-md"
          placeholder="Enter a Todo..." value={input}
          onChange={(e) => setInput(e.target.value)}/>
        <button type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          <i className="fas fa-plus mr-2"></i>Add Todo
        </button>
      </div>
    </form>
  );
};
export default AddTodo;
