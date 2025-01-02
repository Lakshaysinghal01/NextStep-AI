import React from 'react';
import './Results.css';

function Results({ careers }) {
  return (
    <div className="results">
      <h2>Recommended Careers</h2>
      <ul>
        {careers.map((career, index) => (
          <li key={index}>{career}</li>
        ))}
      </ul>
    </div>
  );
}

export default Results;