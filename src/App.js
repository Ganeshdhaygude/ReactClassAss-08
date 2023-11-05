// App.js

import React from 'react';
import EducationPlanner from './body'; // Import your EducationPlanner component here
import './EducationPlanner.css';

function App() {
  return (
    <div className="App">
      <h1>Geelster Education Planner </h1>
      <EducationPlanner /> {/* Include your EducationPlanner component here */}
    </div>
  );
}

export default App;
