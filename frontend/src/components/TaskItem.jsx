
import React from 'react';
import axios from 'axios';

const TaskItem = ({ task, fetchTasks }) => {
  const handleDelete = async () => {
    await axios.delete(`https://backend-task-management-dun.vercel.app/${task._id}`);
    fetchTasks();
  };

  const handleMove = async (status) => {
    await axios.put(`https://backend-task-management-dun.vercel.app/${task._id}`, { status });
    fetchTasks();
  };

  return (
    <div className="bg-white p-4 shadow-md shadow-slate-400 rounded mb-2">
      <h3 className="font-bold">{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => handleMove("In Progress")} className='mt-3 border-2  border-black text-black hover:bg-black hover:text-white'>Move to In Progress</button>
      <button onClick={() => handleMove("Completed")} className='mx-3 border-2 border-black text-black hover:bg-black hover:text-white'>Complete</button>
      <button onClick={handleDelete} className=' border-2 border-black text-black hover:bg-black hover:text-white'>Delete</button>
    </div>
  );
};

export default TaskItem;
