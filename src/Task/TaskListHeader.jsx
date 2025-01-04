import { useContext } from "react"
import { TaskContext } from "../context"

export default function TaskListHeader() { 

  const {setTasks} = useContext(TaskContext);


  return (
    <div className="flex justify-between mb-5">
         <h2 className="text-2xl font-bold mb-3">Task List</h2>
         <button onClick={() => setTasks([])} className="py-2 px-4 rounded bg-orange-600 text-white ml-1">Delete All</button>
    </div>
  )
}
