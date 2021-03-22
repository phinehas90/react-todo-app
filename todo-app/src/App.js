import React, { useState } from 'react'
import './App.css';

import Form from './components/Form';
import TodoList from './components/List'

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <header>
        <h1>React Todo</h1>
      </header>
      <Form todos={todos} inputText={inputText} setTodos={setTodos} setInputText={setInputText} />
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
