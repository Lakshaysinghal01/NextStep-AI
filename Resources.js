import React from 'react';
import './Resources.css';

function Resources() {
  const resources = [
    { name: 'Coursera', link: 'https://www.coursera.org' },
    { name: 'edX', link: 'https://www.edx.org' },
    { name: 'LinkedIn Learning', link: 'https://www.linkedin.com/learning/' },
  ];

  return (
    <div className="resources">
      <h2>Recommended Resources</h2>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}><a href={resource.link} target="_blank" rel="noopener noreferrer">{resource.name}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default Resources;
