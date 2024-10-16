import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import { TaskProvider } from "./context/TaskContext";
import { HomePage } from "./pages/Home";
import { CreateTaskPage } from "./pages/CreateTask";
import { TaskListPage } from "./pages/TaskList";
import { TaskDetailsPage } from "./pages/TaskDetails";

function App() {
  return (
    <TaskProvider>
      <div className="flex justify-center py-5 bg-background h-screen overflow-y-auto">
        <div className="w-1/2 flex flex-col gap-5">
          <Menu />
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/create-task" element={<CreateTaskPage />}/>
            <Route path="/task-list" element={<TaskListPage />}/>
            <Route path="/task-details" element={<TaskDetailsPage />}/>
          </Routes>
        </div>
      </div>
    </TaskProvider>
  );  
}

export default App;
