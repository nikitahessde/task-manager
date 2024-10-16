import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useTasks } from "../../context/TaskContext";
import AddNewTaskForm from "./AddNewTaskForm";

export const AddNewTaskContainer = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskName && taskDescription) {
        addTask({ id: crypto.randomUUID(), name: taskName, description: taskDescription, status: 'todo', createdAt: new Date() });
        setTaskName('');
        setTaskDescription('');
    }
  };

  return (
    <div className={`border-2 border-primary bg-secondary rounded-lg p-4 flex flex-col gap-4`}>
      <div className="flex justify-between">
        <p className="text-xl font-semibold">New task</p>
        {isCollapsed ? (
            <ExpandMore onClick={toggleCollapse}  className="cursor-pointer"  />
        ) : (
            <ExpandLess onClick={toggleCollapse}  className="cursor-pointer"  /> 
        )}
      </div>
      <AddNewTaskForm 
        isCollapsed={isCollapsed}
        taskName={taskName}
        setTaskName={setTaskName}
        taskDescription={taskDescription}
        setTaskDescription={setTaskDescription}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddNewTaskContainer;
