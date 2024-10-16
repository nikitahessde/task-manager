import { useState } from "react";

interface AddNewTaskFormProps {
  isCollapsed: boolean;
  taskName: string;
  setTaskName: (name: string) => void;
  taskDescription: string;
  setTaskDescription: (description: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export const AddNewTaskForm: React.FC<AddNewTaskFormProps> = ({
  isCollapsed,
  taskName,
  setTaskName,
  taskDescription,
  setTaskDescription,
  handleSubmit,
}) => {

  const [formErrors, setFormErrors] = useState({
    taskName: '',
    taskDescription: '',
  });

  const validateForm = () => {
    const errors = {
        taskName: taskName ? '' : 'Task name is required',
        taskDescription: taskDescription ? '' : 'Task description is required',
    };

    setFormErrors(errors);

    return Object.values(errors).every(error => error === '');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      handleSubmit(e);
    }
  };

  return (
    <form className={`space-y-4 ${isCollapsed ? 'hidden' : ''}`} onSubmit={handleFormSubmit}>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-2">
            <label htmlFor="taskName" className="block text-sm font-medium text-primary">Task Name</label>
            <input type="text" id="taskName" value={taskName} maxLength={50} onChange={(e) => {
              setTaskName(e.target.value);
              setFormErrors(prevState => ({
                ...prevState,
                taskName: e.target.value ? '' : formErrors.taskName,
              }));
            }} className="border border-gray-400 p-2 rounded-lg w-full text-sm" placeholder="Enter task name" />
          </div>
          {formErrors.taskName && <div className="text-red-500 text-xs">{formErrors.taskName}</div>}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-2">
            <label htmlFor="taskDescription" className="block text-sm font-medium text-primary">Task Description</label>
            <textarea id="taskDescription" value={taskDescription} maxLength={150} onChange={(e) => {
              setTaskDescription(e.target.value);
              setFormErrors(prevState => ({
                ...prevState,
                taskDescription: e.target.value ? '' : formErrors.taskDescription,
              }));
            }} rows={3} className="border border-gray-400 p-2 rounded-lg w-full text-sm" placeholder="Enter task description"></textarea>
          </div>
          {formErrors.taskDescription && <div className="text-red-500 text-xs">{formErrors.taskDescription}</div>}
        </div>
        <button type="submit" className="inline-flex justify-center rounded-md border border-primary py-2 px-4 text-sm font-medium text-black">Add Task</button>
      </form>
  );
};

export default AddNewTaskForm;


