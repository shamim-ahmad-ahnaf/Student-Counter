import { useContext } from "react";
import { TaskContext } from "../context";

export default function TaskItem({ task}) {

    const {tasks, setTasks, setTaskToEdit} = useContext(TaskContext);

    const handleClick = () => {
        let isConfirm = confirm('Are you sure you want to Delete this...??');
       
        if (isConfirm) {
            setTasks(tasks.filter(t => t.id !== task.id));
        }
    };

    return (
        <li className="flex items-center bg-white rounded shadow-sm p-2 mt-2">
            <span className="font-semibold text-lg">#</span>
            <p className="font-semibold text-lg ml-2">{task.text}</p>
            <button onClick={() => {setTaskToEdit(task)}} className="py-2 px-4 rounded bg-lime-600 text-white ml-auto">Edit</button>
            <button onClick={handleClick} className="py-2 px-4 rounded bg-orange-600 text-white ml-1">Delete</button>
        </li>
    );
}  
