// TodoList.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from './actions';
import './App.css'; 

function TodoList({ todos, addTodo, deleteTodo, toggleTodo }) {
  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    addTodo(inputValue);
    setInputValue('');
  }

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={inputValue} onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleTodo(index)}>{todo.text}</span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
            <button onClick={() => toggleTodo(index)} className={todo.completed ? 'complete-button' : ''}>
              {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  toggleTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
