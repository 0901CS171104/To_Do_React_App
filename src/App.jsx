import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./output.css";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Get up early", completed: false },
  { id: 2, task: "Do breakfast", completed: false },
  { id: 3, task: "Read books", completed: false },
  ]);

  const handleAddTask = (newTaskText) => {
    const newTask = {
      id: tasks.length + 1,
      task: newTaskText,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id) => {
  const updatedTasks = tasks.filter((task) => task.id !== id);
  setTasks(updatedTasks);
};


const handleEditTask = (id, newText) => {
  const updatedTasks = tasks.map(task =>
    task.id === id ? { ...task, task: newText } : task
  );
  setTasks(updatedTasks);
};

const handleToggleComplete = (id) => {
  const updatedTasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  setTasks(updatedTasks);
};

  return (
    <>
    <div className="min-h-screen w-full flex flex-col items-center px-4 py-8 bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200">
      <Header onAddTask={handleAddTask} />
      <ToDoList data={tasks} onDelete={handleDeleteTask} onEdit={handleEditTask} onToggleComplete={handleToggleComplete}/>
    </div>
    </>
    
  );
}

export default App;
