import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, fetchTasks }) => {
  const lanes = ["To Do", "In Progress", "Completed"];

  return (
    <div className="grid grid-cols-3 gap-4">
      {lanes.map((lane) => (
        <div key={lane}>
          <h2 className="text-xl font-semibold mb-2">{lane}</h2>
          {tasks
            .filter((task) => task.status === lane)
            .map((task) => (
              <TaskItem key={task._id} task={task} fetchTasks={fetchTasks} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default TaskList;