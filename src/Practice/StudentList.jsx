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
    if (newStudentName.trim() && newPhoneNumber.trim()) {
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
    if (editingName.trim() && editingPhoneNumber.trim()) {
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
    <div className="p-6 bg-gray-100">
      {/* Add Student Form */}
      <div className="flex flex-col items-center justify-center gap-4 mb-8 md:flex-row">
        <input
          type="text"
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
          placeholder="Enter student name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg md:w-1/3 focus:ring-2 focus:ring-green-400 focus:outline-none"
        />
        <input
          type="text"
          value={newPhoneNumber}
          onChange={(e) => setNewPhoneNumber(e.target.value)}
          placeholder="Enter phone number"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg md:w-1/3 focus:ring-2 focus:ring-green-400 focus:outline-none"
        />
        <button
          onClick={handleAddStudent}
          className="px-6 py-2 font-bold text-white bg-green-500 rounded-lg hover:bg-green-600"
        >
          Add Student
        </button>
      </div>

      {/* Student List */}
      <ul className="divide-y divide-border-gray-300">
        {students.map((student, index) => (
          <li
            key={student.id}
            className={`flex flex-col p-4 mb-4 rounded-lg shadow-lg md:flex-row border-2 border-green-300 ${
              !student.isPresent ? "bg-red-100" : "bg-white"
            } transition-all duration-300 ease-in-out transform ${
              !student.isPresent ? "scale-90" : "scale-100"
            }`}
          >
            {editingId === student.id ? (
              <div className="flex flex-col w-full gap-4 md:flex-row animate-glow">
                <input
                  type="text"
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
                <input
                  type="text"
                  value={editingPhoneNumber}
                  onChange={(e) => setEditingPhoneNumber(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
                <button
                  onClick={handleSaveEdit}
                  className="px-4 py-2 font-bold text-white bg-green-500 rounded-lg hover:bg-green-600"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex flex-col justify-between w-full md:flex-row">
                <div>
                  <h3
                    className={`text-lg font-bold ${
                      !student.isPresent ? "text-red-600 line-through" : "text-gray-800"
                    }`}
                  >
                    {index + 1}. {student.name}
                  </h3>
                  <a
                    href={`tel:${student.phoneNumber}`}
                    className="flex items-center text-blue-500 hover:underline"
                  >
                    <FaPhone className="mr-2" /> {student.phoneNumber}
                  </a>
                </div>
                <div className="flex gap-3 mt-4 md:mt-0">
                  <button
                    onClick={() => handleEditStudent(student.id, student.name, student.phoneNumber)}
                    className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteStudent(student.id)}
                    className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-400"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => toggleAttendance(student.id)}
                    className={`px-4 py-2 text-white rounded-lg ${
                      student.isPresent
                        ? "bg-purple-500 hover:bg-purple-400"
                        : "bg-red-600 hover:bg-red-500"
                    }`}
                  >
                    {student.isPresent ? "Mark Absent" : "Mark Present"}
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 animate-fadeIn">
          <div className="p-6 bg-white border-2 border-green-500 rounded-lg shadow-lg animate-slideUp">
            <h3 className="mb-4 text-xl font-bold text-center text-gray-800">
              Confirm Deletion
            </h3>
            <p className="mb-6 text-center text-gray-600">
              Are you sure you want to delete this student?
            </p>
            <div className="flex justify-center gap-6">
              <button
                onClick={confirmDelete}
                className="px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
              >
                Yes
              </button>
              <button
                onClick={cancelDelete}
                className="px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
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
