import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: taskText,
    };

    setTasks([...tasks, newTask]);
    setTaskText('');
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className="card">
      <h1 className='custom-pb'>Todo List</h1>
      <div>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTask}>Add Task</button>
      <ul className='circle'>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
      </div>
      </div>
    </div>
  );
}

export default App;
