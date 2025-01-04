import { useState, useEffect, useContext } from "react";
import { TaskContext } from "../context";

export default function TaskForm() {

  const {tasks, setTasks, taskToEdit, setTaskToEdit} = useContext(TaskContext);
  const [text, setText] = useState('');


  useEffect(() => {
    if (taskToEdit) {
      setText(taskToEdit.text);
    }
  }, [taskToEdit]);


  const handleClick = () => {
    if (taskToEdit) {
      // Updating
      setTasks(tasks.map(task => { 
        if (task.id === taskToEdit.id) {
            return {
              ...taskToEdit,
              text: text
            };

        } else {
            return task;
        }
    }));
    setTaskToEdit(null);
  } 
    else {
      setTasks([
        ...tasks,
        {
          id: crypto.randomUUID(),
          text: text,
        }
    ]);
    }
    
    setText(''); 
  };
  
  const handleChange = (e) => {
    setText(e.target.value); 
  };


  return (
    <div className="col-span-4 p-3 bg-orange-100 rounded-shadow-sm">
      <h2 className="mb-3 text-2xl font-bold">Task Form</h2>
      <input
        value={text}
        onChange={handleChange}
        type="text"
        className="w-full p-2 mb-2 border"
      />
      <button
        onClick={handleClick}
        className="px-4 py-2 text-white bg-orange-600 btn"
      >
        {taskToEdit ? 'Edit Task' : 'Add Task'}
      </button>
    </div>
  );
}
