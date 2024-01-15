import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const CodeEditor = ({ code, onChange }) => {
  return (
    <MonacoEditor
      language="python"
      theme="vs-dark"
      value={code}
      onChange={onChange}
      options={{ fontSize: 14 }}
    />
  );
};

export default CodeEditor;
