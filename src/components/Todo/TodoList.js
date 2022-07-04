import React from 'react'
import { useList, useStore } from 'effector-react'

import { $todos } from '../../models/todos'

import TodoItem from './TodoItem'

const TodoList = () => {
  const todos = useStore($todos)

  const todosList = useList(($todos), ({ id, name, completed }) => (
    <TodoItem id={id} name={name} completed={completed} />
  ))

  return (
    <div>
      {!todos.length && 'No todos here!'}
      {!!todos.length && todosList}
    </div>
  )
}

export default TodoList
