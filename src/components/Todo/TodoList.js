import React from 'react'
import { useList, useStore } from 'effector-react'

import {$todos, todosPageMounted} from '../../models/todos'

import TodoItem from './TodoItem'
import {useMount} from "../../hooks/useMount";
import {fetchTodosFx} from "../../models/todos/effects";

const TodoList = () => {
  const todos = useStore($todos)
  const isLoading = useStore(fetchTodosFx.pending)

  const todosList = useList(($todos), ({ id, name, completed }) => (
    <TodoItem id={id} name={name} completed={completed} />
  ))

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
