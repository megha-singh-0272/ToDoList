import React, { useState } from "react";
import "./ToDo.css";  

export default function ToDo() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    const text = taskInput.trim();
    if (text) {
      setTasks([...tasks, text]);
      setTaskInput(""); // Clear the input field
    }
  };

  const handleClearTasks = () => {
    setTasks([]);
  };

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  return (
    <div class="parentdiv">
      <div className="container">
        <h1>To Do List</h1>
        <div className="input-div">
          <input
            id="textInput"
            placeholder="Enter task here"
            type="text"
            value={taskInput}
            onChange={handleInputChange}
          />
        </div>

        <div id="task-list">
          {tasks.map((task, index) => (
            <div key={index} className="task-item">
              {task}
            </div>
          ))}
        </div>

        <div className="button">
          <button id="add-button" onClick={handleAddTask}>ADD</button>
          <button id="clear-button" onClick={handleClearTasks}>Clear</button>
        </div>
      </div>
    </div>
  );
}

