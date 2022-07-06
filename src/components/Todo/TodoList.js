import React, {useEffect} from 'react'
import { useList, useStore } from 'effector-react'

import { $todos } from '../../models/todos'

import TodoItem from './TodoItem'
import {fetchTodosFx} from "../../models/todos/effects";

const TodoList = () => {
  const todos = useStore($todos)

  const todosList = useList(($todos), ({ id, name, completed }) => (
    <TodoItem id={id} name={name} completed={completed} />
  ))

  useEffect(() => fetchTodosFx(), [])

  return (
    <div>
      {!todos.length && 'No todos here!'}
      {!!todos.length && todosList}
    </div>
  )
}

export default TodoList
