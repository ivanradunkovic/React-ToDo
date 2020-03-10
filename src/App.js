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
  
  function handleKeyDown(e, i) { //new todo with enter
    if (e.key === 'Enter') {
      createTodoAtIndex(e, i);
    }
    if (e.key === 'Backspace' && todos[i].content === '') { //delete todo with backspace
      e.preventDefault();
      return removeTodoAtIndex(i);
    }
  }

  function createTodoAtIndex(e, i) { // new todo can be created
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
  
  function updateTodoAtIndex(e, i) { //update todo
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  }

  function removeTodoAtIndex(i) { // remove todo
    if (i === 0 && todos.length === 1) return;
    setTodos(todos => todos.slice(0, i).concat(todos.slice(i + 1, todos.length)));
    setTimeout(() => {
      document.forms[0].elements[i - 1].focus();
    }, 0);
  }

  function toggleTodoCompleteAtIndex(index) { // todo completed
    const temporaryTodos = [...todos];
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    setTodos(temporaryTodos);
  }

  return (
    <div className="app">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
      </div>
          <form className="todo-list">
            <ul>
              {todos.map((todo, i) => ( // it will show todos from function
      <div className={`todo ${todo.isCompleted && 'todo-is-completed'}`}>
      <div className={'checkbox'} onClick={() => toggleTodoCompleteAtIndex(i)}>
              {todo.isCompleted && (
            <span>&#x2714;</span>
            )}
      </div>
          <input
                type="text"
                value={todo.content}
                onKeyDown={e => handleKeyDown(e, i)} //i need this for enter new todo
                onChange={e => updateTodoAtIndex(e, i)} //edit todo
          />
      </div>
          ))}
          </ul>
          </form>
    </div>
  );
}

export default App;