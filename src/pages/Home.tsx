import AddNewTaskContainer from "../components/AddNewTask/AddNewTaskContainer";
import TaskListContainer from "../components/TaskList/TaskListContainer";

export const Home = () => {
  return (
    <div className="w-full flex flex-col gap-4 h-full">
        <AddNewTaskContainer />
        <TaskListContainer />
    </div>
  );
};

export default Home;
