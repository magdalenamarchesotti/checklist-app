import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import tasks from './tasks.json';
import './App.css';

function App() {

const [todos, setTodos] = useState(tasks);
const onComplete = (id) => {
  setTodos (todos.map((todo) => {
  return todo.id === Number(id) ? {...todo, completed: !todo.completed} : {...todo}; 
  }))
}

const onDeleteItem = (id) => {
  setTodos ([...todos].filter(todo => todo.id !== id))
}

const addTodo = (newTodo) => {
  let newItem = {
    id: +new Date(),
    task: newTodo,
    completed: false
  }

  setTodos([...todos, newItem]);
}

  return (
    <div className='mainDiv'>
    <div className="container">
      <h1>♥ CHECKLIST APP ♥</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} onComplete={onComplete} onDeleteItem={onDeleteItem}/>
    </div>
    </div>
  );
}

export default App;
