import React from 'react'
import { useList, useStore } from 'effector-react'

import { $todosMapped, todosPageMounted, fetchTodosFx } from '../../models/todos/model'
import {useMount} from "../../hooks/useMount";

import TodoItem from './TodoItem'

const TodoList = () => {
  const todos = useStore($todosMapped)
  const isLoading = useStore(fetchTodosFx.pending)

  const todosList = useList(($todosMapped), ({ name, completed, user }) => {
    const author = user?.name || null

    return <TodoItem name={name} completed={completed} author={author} />
  })

  useMount(todosPageMounted)

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '200px 200px 200px', gridGap: '15px' }}>
      {!todos.length && 'No todos here!'}
      {!!todos.length && todosList}
    </div>
  )
}

export default TodoList
