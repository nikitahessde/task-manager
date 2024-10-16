import { DeleteOutline } from "@mui/icons-material";
import { useState } from 'react';
import { Tooltip } from '@mui/material';

interface Task {
    id: string;
    name: string;
    description: string;
    status: string;
}

interface TaskListProps {
  tasks: Task[];
  removeTask: (taskId: string) => void;
  changeStatus: (taskId: string, status: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, removeTask, changeStatus }) => {

  const truncateDescription = (description: string, length: number) => {
    if (description.length > length) {
      return `${description.substring(0, length)}...`;
    }
    return description;
  };

  return (
    <div className="flex flex-col gap-4">
      {tasks.length ? (
        tasks.map((task: Task) => (
          <div key={task.id} className="flex justify-between items-center border py-2 px-4 rounded-lg w-full">
            <div className="flex items-center flex-grow w-2/3">
              <div className="flex-grow">
                <p className="font-semibold text-base break-all">{task.name}</p>
                <Tooltip title={task.description} placement="top">
                  <p className="text-sm break-words text-gray-500 break-normal all">
                    {truncateDescription(task.description, 50)}
                  </p>
                </Tooltip>
              </div>
            </div>
            <div className="flex items-center gap-2">
                <select 
                className="border rounded-md px-2 py-1 text-sm" 
                value={task.status} 
                onChange={(e) => changeStatus(task.id, e.target.value)}
                >
                <option value="todo">To do</option>
                <option value="in-progress">In progress</option>
                <option value="done">Done</option>
                </select>
                <DeleteOutline className="cursor-pointer" onClick={() => removeTask(task.id)}/>
            </div>
          </div>
        ))
      ) : (
        <p>No tasks to show</p>
      )}
    </div>
  );
};

