import React from 'react';
import './App.css';
import InputField from './cmponents/InputField';
import {useState} from 'react'
import { Todo } from './model';
import TodoList from './cmponents/TodoList';

// providing type of react functional component
const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();
    if(todo) {
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
