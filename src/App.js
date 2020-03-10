import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      content: 'Create new app',
      isCompleted: true,
    },
    {
      content: 'Commit to git',
      isCompleted: false,
    },
    {
      content: 'npm start',
      isCompleted: false,
    }
  ]);
  
  return (
    <div className="app">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <form className="todo-list">
        <ul>
          <div className="todo">
            <div className="checkbox" />
            <input type="text" value="First ToDo" />
          </div>
        </ul>
      </form>
    </div>
  );
}

export default App;