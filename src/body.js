import React, { useState, useEffect } from 'react';

const EducationPlanner = () => {
  const [subjects, setSubjects] = useState([]);

  // Load data from local storage on component mount
  useEffect(() => {
    const storedSubjects = JSON.parse(localStorage.getItem('subjects'));
    if (storedSubjects) {
      setSubjects(storedSubjects);
    }
  }, []);

  // Save data to local storage every time 'subjects' change
  useEffect(() => {
    localStorage.setItem('subjects', JSON.stringify(subjects));
  }, [subjects]);

  const addSubject = (name, hours) => {
    const newSubject = { name, hours };
    setSubjects([...subjects, newSubject]);
    
  };

  const handlePlusButton = (index) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index].hours += 1;
    setSubjects(updatedSubjects);
  };

  const handleMinusButton = (index) => {
    const updatedSubjects = [...subjects];
    if (updatedSubjects[index].hours > 0) {
      updatedSubjects[index].hours -= 1;
      setSubjects(updatedSubjects);
    }
  };

  return (
    <div>
      <h2>Education Planner</h2>
      <div>
        <input type="text" placeholder="Subject Name" />
        <input type="number" placeholder="Study Hours" />
        <button onClick={() => addSubject("Example", 1)}>Add </button>
      </div>
      <div>
        {subjects.map((subject, index) => (
          <div key={index}>
            <span>{subject.name} - {subject.hours} hours</span>
            <button onClick={() => handlePlusButton(index)}>+</button>
            <button onClick={() => handleMinusButton(index)}>-</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationPlanner;
