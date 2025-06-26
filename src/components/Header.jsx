import React, { useState } from "react";

const Header = ({ onAddTask }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => setSearch(e.target.value);

  const handleAddTask = () => {
    if (search.trim() !== "") {
      onAddTask(search);
      setSearch("");
    }
  };

  return (
    <div className="w-full flex flex-col items-center mt-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6 flex items-center gap-2">
        📄 To Do List
      </h1>

      <div className="flex w-[500px] max-w-full">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Enter a new task"
          className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default Header;
