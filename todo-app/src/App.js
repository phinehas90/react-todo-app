import React, { useState } from 'react'
import './App.css';

import Form from './components/Form';
import TodoList from './components/List'

function App() {

  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <header>
        <h1>React Todo</h1>
      </header>
      <Form setInputText={setInputText} />
      <TodoList inputText={inputText}/>
    </div>
  );
}

export default App;
