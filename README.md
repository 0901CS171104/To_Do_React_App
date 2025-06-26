A simple and responsive To-Do List built using React (Vite) and Tailwind CSS. This application allows users to add, delete, edit, and mark tasks as completed.

🔧 Features
✅ Add new tasks
✅ Edit existing tasks
✅ Delete tasks
✅ Mark tasks as completed or undo
✅ Fully responsive UI with Tailwind CSS
✅ Built using functional components, props, and state

📁 Folder Structure
pgsql
Copy
Edit
to-do-list/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ToDoList.jsx
│   │   └── ToDoItem.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
🚀 Getting Started
Prerequisites
Node.js (v16 or later)

npm or yarn

Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/YOUR-USERNAME/To_Do_React_App.git
Navigate to the project folder:

bash
Copy
Edit
cd To_Do_React_App
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm run dev
The app will be available at http://localhost:5173

🎯 Technical Requirements Covered
✅ 1. React App Setup
Created with Vite.

Runs with no errors.

✅ 2. Components
App

Header

ToDoList

ToDoItem

✅ 3. State and Props
App holds main task state.

Props passed from App → ToDoList → ToDoItem.

✅ 4. Lists
.map() used in ToDoList to render all items.

Each item has a unique key (id).

✅ 5. Event Handling
Add new task

Delete task

Edit task

Mark complete/undo complete

✅ 6. Styling
Tailwind CSS used for styling and layout.

