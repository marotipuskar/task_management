// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get('https://backend-task-management-dun.vercel.app/');
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Task Management App</h1>
      <TaskForm fetchTasks={fetchTasks} />
      <TaskList tasks={tasks} fetchTasks={fetchTasks} />
    </div>
  );
}

export default App;

// React Frontend (basic example)
// Install necessary packages: react, react-dom, axios

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState({ title: '', description: '' });

//   useEffect(() => {
//     axios.get('http://localhost:5000/tasks').then((response) => {
//       setTasks(response.data);
//     });
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:5000/tasks', newTask).then((response) => {
//       setTasks([...tasks, response.data]);
//       setNewTask({ title: '', description: '' });
//     });
//   };

//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:5000/tasks/${id}`).then(() => {
//       setTasks(tasks.filter((task) => task._id !== id));
//     });
//   };

//   const moveTask = (id, newStatus) => {
//     const task = tasks.find((task) => task._id === id);
//     axios.put(`http://localhost:5000/tasks/${id}`, { ...task, status: newStatus }).then((response) => {
//       setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
//     });
//   };

//   return (
//     <div>
//       <h1>Task Management App</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Task Title"
//           value={newTask.title}
//           onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
//           required
//         />
//         <textarea
//           placeholder="Task Description"
//           value={newTask.description}
//           onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
//         ></textarea>
//         <button type="submit">Add Task</button>
//       </form>

//       <div className="status-lanes">
//         {['To Do', 'In Progress', 'Done'].map((status) => (
//           <div key={status} className="lane">
//             <h2>{status}</h2>
//             {tasks
//               .filter((task) => task.status === status)
//               .map((task) => (
//                 <div key={task._id} className="task">
//                   <h3>{task.title}</h3>
//                   <p>{task.description}</p>
//                   <button onClick={() => handleDelete(task._id)}>Delete</button>
//                   {status !== 'To Do' && (
//                     <button onClick={() => moveTask(task._id, 'To Do')}>Move to To Do</button>
//                   )}
//                   {status !== 'In Progress' && (
//                     <button onClick={() => moveTask(task._id, 'In Progress')}>Move to In Progress</button>
//                   )}
//                   {status !== 'Done' && (
//                     <button onClick={() => moveTask(task._id, 'Done')}>Move to Done</button>
//                   )}
//                 </div>
//               ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
