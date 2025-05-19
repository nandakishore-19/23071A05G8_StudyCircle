import React from 'react';

function Scholarship() {
  const scholarships = [
    { name: 'Merit-Based Scholarship', amount: '$1000' },
    { name: 'Need-Based Scholarship', amount: '$1500' },
    { name: 'Sports Scholarship', amount: '$1200' },
  ];

  return (
    <div className="page">
      <h1>Scholarship Opportunities</h1>
      <ul>
        {scholarships.map((scholarship, index) => (
          <li key={index}>
            <strong>{scholarship.name}</strong>: {scholarship.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Scholarship;