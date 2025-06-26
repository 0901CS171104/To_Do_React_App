import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ data, onDelete, onEdit, onToggleComplete}) => {
  console.log(data);

  return (
    <div className="flex flex-col items-center justify-center mr-25">
      {data.map((taskItem) => (
        <ToDoItem
          id={taskItem.id}
          key={taskItem.id}
          task={taskItem.task}
           completed={taskItem.completed}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
};

export default ToDoList;
