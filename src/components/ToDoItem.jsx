import React, { useState } from 'react';

const ToDoItem = ({ task, id, completed, onDelete, onEdit, onToggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task);

  const handleDelete = () => onDelete(id);
  const handleEditToggle = () => setIsEditing(true);
  const handleEditChange = (e) => setEditText(e.target.value);
  const handleEditSave = () => {
    if (editText.trim() !== "") {
      onEdit(id, editText);
      setIsEditing(false);
    }
  };
  const handleCompleteToggle = () => onToggleComplete(id);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-7 ml-25 mt-3 w-full max-w-xl transition hover:shadow-lg flex justify-between items-center">
      <div className={`flex-1 text-lg ${completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={handleEditChange}
            className="border rounded-md px-2 py-1 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        ) : (
          task
        )}
      </div>

      <div className="flex gap-2 ml-4">
        {isEditing ? (
          <button
            className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            onClick={handleEditSave}
          >
            Save
          </button>
        ) : (
          <button
            className="px-3 py-1 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition"
            onClick={handleEditToggle}
          >
            Edit
          </button>
        )}
        <button
          className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className={`px-3 py-1 rounded-md transition ${
            completed ? 'bg-green-300 text-white hover:bg-green-400' : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
          onClick={handleCompleteToggle}
        >
          {completed ? "Undo" : "Complete"}
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
