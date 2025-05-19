import React from 'react';
import { useStudentContext } from '../context/studentcontext';

function StudentDetails() {
  const { students } = useStudentContext();

  return (
    <div className="page">
      <h1>Student Details</h1>
      {students.map((student) => (
        <div key={student.id}>
          <p>Name: {student.name}</p>
          <p>Email: {student.email}</p>
          <p>CGPA: {student.cgpa}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentDetails;
