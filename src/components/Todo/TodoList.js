import React from 'react'
import { useStore } from 'effector-react'

import { $todos } from '../../models/todos'

import TodoItem from './TodoItem'

const TodoList = () => {
  const todos = useStore($todos)

  return (
    <div>
      {!todos.length && 'No todos here!'}
      {(todos || []).map((todo) => (
        <TodoItem key={todo.id} id={todo.id} name={todo.name} completed={todo.completed} />
      ))}
    </div>
  )
}

export default TodoList
