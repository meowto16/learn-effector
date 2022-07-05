import React from 'react';
import TodoList from './components/Todo/TodoList'
import TodoControl from './components/Todo/TodoControl'
import TodoError from "./components/Todo/TodoError"

const App = () => {
  return (
    <div>
      <h1>TodoList example on effector</h1>
      <TodoControl />
      <TodoError />
      <TodoList />
    </div>
  );
};

export default App;
