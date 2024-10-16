import AddNewTask from "../components/AddNewTask";
import TaskList from "../components/TaskList";

export const HomePage = () => {
  return (
    <div className="w-full flex flex-col gap-4 h-full">
        <AddNewTask />
        <TaskList />
    </div>
  );
};