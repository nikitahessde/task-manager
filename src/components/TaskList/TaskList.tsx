import { DeleteOutline } from "@mui/icons-material";
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

  return (
    <div className="flex flex-col gap-4">
      {tasks.length ? (
        tasks.map((task: Task) => (
          <div key={task.id} className="flex justify-between items-center border py-2 px-4 rounded-lg w-full">
            <div className="flex items-center flex-grow w-2/3">
              <div className="flex-grow max-w-full">
                <p className="font-semibold text-base break-all">{task.name}</p>
                <Tooltip title={task.description} placement="top">
                  <p className="text-sm break-words text-gray-500 truncate">
                    {task.description}
                  </p>
                </Tooltip>
              </div>
            </div>
            <div className="flex items-center gap-2 w-1/3 justify-end">
                <select 
                className="border rounded-md px-2 py-1 text-sm" 
                value={task.status} 
                onChange={(e) => changeStatus(task.id, e.target.value)}
                >
                <option value="todo">To do</option>
                <option value="inProgress">In progress</option>
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

