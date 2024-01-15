import React from 'react';

const Terminal = ({ output }) => {
  return (
    <div>
      <h2>Terminal</h2>
      <pre>{output}</pre>
    </div>
  );
};

export default Terminal;
