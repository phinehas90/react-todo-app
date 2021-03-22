
import './App.css';

import Form from './components/Form';
import TodoList from './components/List'

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Todo</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
