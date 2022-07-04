import React from 'react'

import { $todos } from '../../models/todos'

import TodoItem from './TodoItem'
import { useStore } from 'effector-react'

const TodoList = () => {
  const todos = useStore($todos)

  return (
    <div>
      {!todos.length && 'No todos here!'}
      {(todos || []).map((todo) => (
        <TodoItem key={todo.id} id={todo.id} name={todo.name} />
      ))}
    </div>
  )
}

export default TodoList
