import React, { useState } from "react";

function StudentList({ students, addStudent, toggleAttendance, deleteStudent, editStudent }) {
  const [newStudentName, setNewStudentName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");

  const handleAddStudent = () => {
    if (newStudentName.trim() !== "") {
      addStudent(newStudentName);
      setNewStudentName("");
    }
  };

  const handleEditStudent = (id, name) => {
    setEditingId(id);
    setEditingName(name);
  };

  const handleSaveEdit = () => {
    if (editingName.trim() !== "") {
      editStudent(editingId, editingName);
      setEditingId(null);
      setEditingName("");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 mb-6 md:flex-row">
        <input
          type="text"
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
          placeholder="Enter student name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg md:w-3/4 focus:outline-none focus:ring-2 focus:ring-lime-400"
        />
        <button
          onClick={handleAddStudent}
          className="px-6 py-2 font-bold text-white bg-green-500 rounded-lg shadow hover:bg-lime-500"
        >
          Add Student
        </button>
      </div>
      <ul className="divide-y divide-gray-200">
        {students.map((student) => (
          <li
            key={student.id}
            className="flex flex-col items-center justify-between p-4 mb-4 rounded-lg shadow md:flex-row bg-gray-50"
          >
            {editingId === student.id ? (
              <div className="flex items-center w-full">
                <input
                  type="text"
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                  className="flex-grow px-4 py-2 mr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
                />
                <button
                  onClick={handleSaveEdit}
                  className="px-3 py-1 text-white bg-green-500 rounded-lg shadow hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={student.isPresent}
                    onChange={() => toggleAttendance(student.id)}
                    className="w-5 h-5 mr-4 text-lime-500"
                  />
                  <span
                    className={`text-lg ${
                      student.isPresent
                        ? "text-gray-800"
                        : "text-red-500 line-through"
                    }`}
                  >
                    {student.name}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleEditStudent(student.id, student.name)}
                    className="px-3 py-1 text-white bg-green-600 rounded-lg shadow hover:bg-lime-400"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteStudent(student.id)}
                    className="px-3 py-1 text-white bg-red-500 rounded-lg shadow hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
