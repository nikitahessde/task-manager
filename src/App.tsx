import AddNewTask from "./components/AddNewTask/AddNewTaskContainer";
import TaskList from "./components/TaskList/TaskListContainer";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <div className="flex justify-center py-10 bg-background h-screen">
        <div className="w-1/2 flex flex-col gap-10">
          <AddNewTask />
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );  
}

export default App;
