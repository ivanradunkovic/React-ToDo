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
  
  function handleKeyDown(e, i) {
    if (e.key === 'Enter') {
      createTodoAtIndex(e, i);
    }
  }

  function createTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      content: '',
      isCompleted: false,
    });
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }
  

  return (
    <div className="app">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <form className="todo-list">
        <ul>
          {todos.map((todo, i) => ( // it will show todos from function 
          <div className="todo">
            <div className="checkbox" />
            <input type="text"
            value={todo.content}
            onKeyDown={e => handleKeyDown(e, i)}
            />
          </div>
           ))}
        </ul>
      </form>
    </div>
  );
}

export default App;