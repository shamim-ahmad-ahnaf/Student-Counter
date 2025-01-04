import { useState } from "react";
import Learn from "./Learn";

export default function Practice() {

  function initialTasks() {
    return [
      { id: 0, text: "Visit Kafka Museum" },
      { id: 1, text: "Watch a puppet show" },
      { id: 2, text: "Lennon Wall pic" },
    ];
  }

  const [cleane, setCleane] = useState(initialTasks);
  const [edite, setEdite] = useState (null);
  const [newText, setNewText] = useState("");
  

  
  const handleClick = (id) => {
    setCleane(cleane.filter((task) => task.id !== id));
  };

  const handleClickAll = () => {
    setCleane([]);
  };

  const handleEdite = (id, currentText) => {
    setEdite(id)
    setNewText(currentText);
  };

  return (
    <div className="w-11/12 px-5 py-5 mx-auto mb-5 mt-96 bg-slate-400">
      <h1 className="text-6xl font-bold text-red-700">Sonar Bangla</h1>
      <ul>
        {cleane.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between gap-5"
          >
            <span>{task.text}</span>
               
            <button
              onClick={() => handleEdite(task.id, task.text)} 
              className="px-2 py-2 mb-5 text-white bg-green-600 rounded ">
              Edite
            </button>
            
            <button
              onClick={() => handleClick(task.id)} 
              className="px-2 py-2 mb-5 text-white bg-red-600 rounded ">
              Delete
            </button>
          </li>
        ))}
      </ul>

      {cleane.length > 0 && (
        <button
          onClick={handleClickAll}
          className="px-2 py-2 mb-5 text-white bg-red-600 rounded">
          Delete All
        </button>
      )}

      <Learn />
    </div>
  );
}
