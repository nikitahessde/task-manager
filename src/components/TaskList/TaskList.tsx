import { DeleteOutline } from "@mui/icons-material";

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
    <div>
      {tasks.length > 0 ? (
        tasks.map((task: Task) => (
          <div key={task.id} className="flex justify-between items-center border py-2 px-4 rounded-lg">
            <div className="flex items-center">
              <div>
                <p className="font-semibold text-base">{task.name}</p>
                <p className="text-sm">{task.description}</p>
              </div>
            </div>
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
        ))
      ) : (
        <p>No tasks to show</p>
      )}
    </div>
  );
};

