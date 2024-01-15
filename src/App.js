import React, { useState } from "react";
import Sk from "skulpt";
import CodeEditor from "./components/CodeEditor";
import RunButton from "./components/RunButton";
import TaskDescription from "./components/TaskDescription";
import Terminal from "./components/Terminal";
import "./App.css";
 

const App = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleRunCode = () => {
    Sk.execute(code, {
      output: (text) => setOutput((prevOutput) => prevOutput + text),
    });
  };

  const taskDescription = "Задание: Напишите Python код для ...";

  return (
    <div className="App">
      <CodeEditor code={code} onChange={handleCodeChange} />
      <RunButton onClick={handleRunCode} />
      <TaskDescription description={taskDescription} />
      <Terminal output={output} />
    </div>
  );
};

export default App;
