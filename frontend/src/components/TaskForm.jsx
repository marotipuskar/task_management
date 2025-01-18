
import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const backendUrl = "https://task-management-backend-azure.vercel.app";
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    // await axios.post('https://backend-task-management-dun.vercel.app/', { title, description });
    await axios.post(`${backendUrl}/tasks`, { title: "Task Title", description: "Task Description" })
      .then(response => console.log(response))
      .catch(error => console.error(error));
    setTitle("");
    setDescription("");
    fetchTasks();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input 
        type="text" 
        placeholder="Task Title" 
        value={title} 
        required
        onChange={(e) => setTitle(e.target.value)} 
        className="p-2 border rounded w-full mb-2"
      />
      <textarea 
        placeholder="Task Description" 
        value={description} 
        required
        onChange={(e) => setDescription(e.target.value)} 
        className="p-2 border rounded w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
