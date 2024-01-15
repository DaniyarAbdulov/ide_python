import React from 'react';

const TaskDescription = ({ description }) => {
  return (
    <div>
      <h2>Task Description</h2>
      <p>{description}</p>
    </div>
  );
};

export default TaskDescription;
