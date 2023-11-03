
import React from 'react';

const Lessons = () => {
  const items = ['Lesson 1', 'Lesson 2', 'Lesson 3'];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Lessons;