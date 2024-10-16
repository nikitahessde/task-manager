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
  return (
    <form className={`space-y-4 ${isCollapsed ? 'hidden' : ''}`} onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="taskName" className="block text-sm font-medium text-primary">Task Name</label>
          <input type="text" id="taskName" value={taskName} onChange={(e) => setTaskName(e.target.value)} className="border border-gray-400 p-2 rounded-lg w-full text-sm" placeholder="Enter task name" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="taskDescription" className="block text-sm font-medium text-primary">Task Description</label>
          <textarea id="taskDescription" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} rows={3} className="border border-gray-400 p-2 rounded-lg w-full text-sm" placeholder="Enter task description"></textarea>
        </div>
        <button type="submit" className="inline-flex justify-center rounded-md border border-primary py-2 px-4 text-sm font-medium text-black">Add Task</button>
      </form>
  );
};

export default AddNewTaskForm;


