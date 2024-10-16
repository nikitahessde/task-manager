import { useTasks } from "../../context/TaskContext";
import { TaskDetails } from "./TaskDetails";

export const TaskDetailsContainer = () => {
  const { tasks } = useTasks();

  return (
    <div className={`border-2 border-primary bg-secondary rounded-lg p-4 flex flex-col gap-4`}>
      <TaskDetails tasks={tasks}/>
    </div>
  );
};

export default TaskDetailsContainer;