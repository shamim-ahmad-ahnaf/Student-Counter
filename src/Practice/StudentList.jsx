import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";

function StudentList({ students, addStudent, toggleAttendance, deleteStudent, editStudent }) {
  const [newStudentName, setNewStudentName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");
  const [editingPhoneNumber, setEditingPhoneNumber] = useState("");
  const [showModal, setShowModal] = useState(false);  
  const [studentToDelete, setStudentToDelete] = useState(null);  

  const handleAddStudent = () => {
    if (newStudentName.trim() !== "" && newPhoneNumber.trim() !== "") {
      addStudent(newStudentName, newPhoneNumber);
      setNewStudentName("");
      setNewPhoneNumber("");  
    }
  };

  const handleEditStudent = (id, name, phoneNumber) => {
    setEditingId(id);
    setEditingName(name);
    setEditingPhoneNumber(phoneNumber);
  };

  const handleSaveEdit = () => {
    if (editingName.trim() !== "" && editingPhoneNumber.trim() !== "") {
      editStudent(editingId, editingName, editingPhoneNumber);
      setEditingId(null);
      setEditingName("");
      setEditingPhoneNumber("");  
    }
  };

  const handleDeleteStudent = (id) => {
    setStudentToDelete(id);  
    setShowModal(true);  
  };

  const confirmDelete = () => {
    deleteStudent(studentToDelete);  
    setShowModal(false);  
  };

  const cancelDelete = () => {
    setShowModal(false);  
  };

  return (
    <div className="">
     
      <div className="flex flex-col items-center justify-center gap-4 mb-6 md:flex-row">
        <input
          type="text"
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
          placeholder="Enter student name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg md:w-3/4 focus:outline-none focus:ring-2 focus:ring-lime-400"
        />
        <input
          type="text"
          value={newPhoneNumber}
          onChange={(e) => setNewPhoneNumber(e.target.value)}
          placeholder="Enter phone number"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg md:w-3/4 focus:outline-none focus:ring-2 focus:ring-lime-400"
        />
        <button
          onClick={handleAddStudent}
          className="w-full px-6 py-2 font-bold text-white bg-green-500 rounded-lg shadow md:w-auto hover:bg-lime-500"
        >
          Add Student
        </button>
      </div>

      {/* Student List */}
      <ul className="divide-y divide-gray-200">
        {students.map((student, index) => (
          <li
            key={student.id}
            className="flex flex-col items-center justify-between p-4 mb-4 rounded-lg shadow md:flex-row bg-gray-50"
          >
            {editingId === student.id ? (
              <div className="flex flex-col items-center w-full md:flex-row">
                <div className="flex items-center flex-grow">
                  <input
                    type="text"
                    value={editingName}
                    onChange={(e) => setEditingName(e.target.value)}
                    className="w-full px-4 py-2 mr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
                  />
                  <input
                    type="text"
                    value={editingPhoneNumber}
                    onChange={(e) => setEditingPhoneNumber(e.target.value)}
                    className="w-full px-4 py-2 mr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
                  />
                </div>
                <button
                  onClick={handleSaveEdit}
                  className="w-full px-3 py-1 mt-2 text-white bg-green-500 rounded-lg shadow md:w-auto md:mt-0 hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col items-center mb-4 md:mb-0">
                  <div className="flex items-center mb-2">
                    <span className="mr-2 text-lg font-bold text-gray-800">{index + 1}.</span>
                    <span className="text-lg text-gray-800">{student.name}</span>
                  </div>
                  <a
                    href={`tel:${student.phoneNumber}`}
                    className="flex items-center space-x-2 text-blue-500 hover:text-blue-700"
                  >
                    <FaPhone className="w-5 h-5" /> 
                    <span>{student.phoneNumber}</span>
                  </a>
                </div>
                <div className="flex items-center mt-4 space-x-3 md:mt-0">
                  <button
                    onClick={() => handleEditStudent(student.id, student.name, student.phoneNumber)}
                    className="px-3 py-1 text-white bg-green-600 rounded-lg shadow hover:bg-lime-400"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteStudent(student.id)}
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

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-11/12 p-6 transition-all duration-300 ease-in-out transform bg-white border-4 border-green-500 rounded-lg shadow-lg sm:w-96">
            <h3 className="mb-6 text-2xl font-semibold text-center text-gray-800 ">Are you sure you want to delete this student?</h3>
            <div className="flex justify-center gap-6">
              <button
                onClick={confirmDelete}
                className="px-6 py-2 text-white transition-all duration-200 ease-in-out transform bg-green-600 rounded-lg hover:bg-green-700"
              >
                Yes
              </button>
              <button
                onClick={cancelDelete}
                className="px-6 py-2 text-white transition-all duration-200 ease-in-out transform bg-red-500 rounded-lg hover:bg-red-600"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentList;
