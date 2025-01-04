import TaskForm from "./Task/TaskForm";
import TaskList from "./Task/TaskList";

export default function TaskComponent() {
  return (
    <div className="max-w-7xl w-11/12 mx-auto my-3 grid grid-cols-12 gap-4">
      <TaskForm/>
      <TaskList/>
      
    </div>
  );
}
