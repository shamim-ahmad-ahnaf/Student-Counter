import React, { useState, useEffect } from "react";
import StudentList from "./Practice/StudentList";

function App() {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");
    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  const [presentCount, setPresentCount] = useState(() => {
    const savedStudents = localStorage.getItem("students");
    return savedStudents
      ? JSON.parse(savedStudents).filter((student) => student.isPresent).length
      : 0;
  });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (name, phoneNumber) => {
    const newStudent = { id: Date.now(), name, phoneNumber, isPresent: true };
    setStudents([...students, newStudent]);
    setPresentCount(presentCount + 1);
  };

  const toggleAttendance = (id) => {
    const updatedStudents = students.map((student) =>
      student.id === id
        ? { ...student, isPresent: !student.isPresent }
        : student
    );
    setStudents(updatedStudents);
    setPresentCount(
      updatedStudents.filter((student) => student.isPresent).length
    );
  };

  const deleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
    setPresentCount(
      updatedStudents.filter((student) => student.isPresent).length
    );
  };

  const editStudent = (id, newName, newPhoneNumber) => {
    const updatedStudents = students.map((student) =>
      student.id === id
        ? { ...student, name: newName, phoneNumber: newPhoneNumber }
        : student
    );
    setStudents(updatedStudents);
  };

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-100 ">
      <div className="max-w-4xl p-6 mx-auto bg-white border-4 border-green-400 rounded-lg shadow-lg">
        <h1 className="mb-6 text-5xl font-bold text-center md:text-6xl text-lime-500">
          Student Counter
        </h1>
        <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-3">
          <div className="p-4 text-center text-white bg-purple-500 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Total Students</h2>
            <p className="text-3xl font-bold">{students.length}</p>
          </div>
          <div className="p-4 text-center text-white bg-green-500 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Present</h2>
            <p className="text-3xl font-bold">{presentCount}</p>
          </div>
          <div className="p-4 text-center text-white bg-red-500 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Absent</h2>
            <p className="text-3xl font-bold">
              {students.length - presentCount}
            </p>
          </div>
        </div>
        <StudentList
          students={students}
          addStudent={addStudent}
          toggleAttendance={toggleAttendance}
          deleteStudent={deleteStudent}
          editStudent={editStudent}
        />
      </div>
    </div>
  );
}

export default App;
