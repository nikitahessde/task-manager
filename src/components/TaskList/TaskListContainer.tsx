import { useTasks } from "../../context/TaskContext";
import { TaskList } from "./TaskList";

export const TaskListContainer = () => {
    const { tasks, removeTask, changeStatus } = useTasks();
    return (
        <div className="border-2 border-primary bg-secondary rounded-lg p-4 flex flex-col gap-4 overflow-y-auto">
            <p className="text-xl font-semibold">Task list</p>
            <TaskList
                tasks={tasks}
                removeTask={removeTask}
                changeStatus={changeStatus}
            />
        </div>
    );
  };
  
  export default TaskListContainer;