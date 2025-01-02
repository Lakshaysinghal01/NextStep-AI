import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Career Guidance App</h1>
      <p>Discover your ideal career path and achieve your goals!</p>
      <div className="home-content">
        <section>
          <h2>Why Choose Us?</h2>
          <p>Our platform provides personalized career guidance based on your interests, skills, and academic performance.</p>
        </section>
        <section>
          <h2>Features:</h2>
          <ul>
            <li>Interactive Questionnaire</li>
            <li>AI-Powered Career Recommendations</li>
            <li>Curated Learning Resources</li>
            <li>Progress Tracking Dashboard</li>
          </ul>
        </section>
        <section>
          <h2>Get Started</h2>
          <p>Sign up today and take the first step towards a fulfilling career!</p>
        </section>
      </div>
    </div>
  );
}

export default Home;