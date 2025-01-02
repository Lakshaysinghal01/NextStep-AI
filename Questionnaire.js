// Updated and improved Questionnaire.js for a more professional look
import React, { useState } from 'react';
import './Questionnaire.css';

function Questionnaire() {
  const [responses, setResponses] = useState({
    interest: '',
    skill: '',
    academic: '',
  });

  const handleChange = (e) => {
    setResponses({ ...responses, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/predict/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(responses),
    });
    const data = await res.json();
    console.log('Predicted Careers:', data);
  };

  return (
    <div className="questionnaire-container">
      <h2 className="questionnaire-title">Career Questionnaire</h2>
      <p className="questionnaire-intro">Fill out the form below to receive personalized career suggestions based on your interests, skills, and academic performance.</p>
      <form onSubmit={handleSubmit} className="questionnaire-form">
        <div className="form-group">
          <label htmlFor="interest">Interest:</label>
          <input
            type="text"
            id="interest"
            name="interest"
            placeholder="Enter your interests"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="skill">Skill:</label>
          <input
            type="text"
            id="skill"
            name="skill"
            placeholder="Enter your skills"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="academic">Academic Performance:</label>
          <input
            type="text"
            id="academic"
            name="academic"
            placeholder="Enter your academic performance"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default Questionnaire;
