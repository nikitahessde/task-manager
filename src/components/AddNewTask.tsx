import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useTasks } from "../context/TaskContext";
import { useForm } from "react-hook-form";

export const AddNewTask = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { addTask } = useTasks();

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      taskName: '',
      taskDescription: ''
    }
  });

  const onSubmit = (data: { taskName: string; taskDescription: string }) => {
    addTask({ id: crypto.randomUUID(), name: data.taskName, description: data.taskDescription, status: 'todo', createdAt: new Date() });
    reset();
  };

  return (
    <div className='border-2 border-primary bg-secondary rounded-lg p-4 flex flex-col gap-4'>
      <div className="flex justify-between">
        <p className="text-xl font-semibold">New task</p>
        {isCollapsed ? (
            <ExpandMore onClick={() => setIsCollapsed(false)}  className="cursor-pointer"  />
        ) : (
            <ExpandLess onClick={() => setIsCollapsed(true)}  className="cursor-pointer"  /> 
        )}
      </div>
      <form className={`space-y-4 ${isCollapsed ? 'hidden' : ''}`} onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-2">
            <label htmlFor="taskName" className="block text-sm font-medium text-primary">Task Name</label>
            <input 
              type="text" 
              id="taskName" 
              {...register('taskName', { required: 'Task name is required', maxLength: { value: 50, message: 'Max length is 50' } })} 
              className="border border-gray-400 p-2 rounded-lg w-full text-sm" 
              placeholder="Enter task name" 
            />
          </div>
          {errors.taskName && <div className="text-red-500 text-xs">{errors.taskName.message}</div>}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-2">
            <label htmlFor="taskDescription" className="block text-sm font-medium text-primary">Task Description</label>
            <textarea 
              id="taskDescription" 
              {...register('taskDescription', { required: 'Task description is required', maxLength: { value: 150, message: 'Max length is 150' } })} 
              rows={3} 
              className="border border-gray-400 p-2 rounded-lg w-full text-sm" 
              placeholder="Enter task description"
            ></textarea>
          </div>
          {errors.taskDescription && <div className="text-red-500 text-xs">{errors.taskDescription.message}</div>}
        </div>
        <button type="submit" className="inline-flex justify-center rounded-md border border-primary py-2 px-4 text-sm font-medium text-black">Add Task</button>
      </form>
    </div>
  );
};

export default AddNewTask;
