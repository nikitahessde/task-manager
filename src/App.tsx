import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import { TaskProvider } from "./context/TaskContext";
import Home from "./pages/Home";
import { CreateTask } from "./pages/CreateTask";
import { TaskList } from "./pages/TaskList";
import { TaskDetails } from "./pages/TaskDetails";

function App() {
  return (
    <TaskProvider>
      <div className="flex justify-center py-5 bg-background h-screen overflow-y-auto">
        <div className="w-1/2 flex flex-col gap-5">
          <Menu />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/create-task" element={<CreateTask />}/>
            <Route path="/task-list" element={<TaskList />}/>
            <Route path="/task-details" element={<TaskDetails />}/>
          </Routes>
        </div>
      </div>
    </TaskProvider>
  );  
}

export default App;
