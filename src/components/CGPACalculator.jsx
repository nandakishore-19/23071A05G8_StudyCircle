import React, { useState } from 'react';

function CGPACalculator() {
  const [grades, setGrades] = useState([]);
  const [cgpa, setCgpa] = useState(0);

  const handleAddGrade = () => {
    setGrades([...grades, 0]);
  };

  const handleGradeChange = (index, value) => {
    const updatedGrades = [...grades];
    updatedGrades[index] = parseFloat(value) || 0;
    setGrades(updatedGrades);
  };

  const calculateCGPA = () => {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    setCgpa((total / grades.length).toFixed(2));
  };

  return (
    <div className="page">
      <h1>CGPA Calculator</h1>
      {grades.map((grade, index) => (
        <input
          key={index}
          type="number"
          placeholder={`Grade ${index + 1}`}
          value={grade}
          onChange={(e) => handleGradeChange(index, e.target.value)}
        />
      ))}
      <button onClick={handleAddGrade}>Add Grade</button>
      <button onClick={calculateCGPA}>Calculate CGPA</button>
      <p>Your CGPA: {cgpa}</p>
    </div>
  );
}

export default CGPACalculator;