import React from 'react';
import TodoList from './components/Todo/TodoList'
import TodoFilter from "./components/Todo/TodoFilter";
import TodoPagination from "./components/Todo/TodoPagination";

const App = () => {
  return (
    <div>
      <h1>TodoList example on effector</h1>
      <TodoFilter />
      <TodoList />
      <TodoPagination />
    </div>
  );
};

export default App;
