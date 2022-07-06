import React from 'react'
import { useList, useStore } from 'effector-react'

import {$todos, todosPageMounted} from '../../models/todos/model'

import TodoItem from './TodoItem'
import {useMount} from "../../hooks/useMount";
import {fetchTodosFx} from "../../models/todos/model";

const TodoList = () => {
  const todos = useStore($todos)
  const isLoading = useStore(fetchTodosFx.pending)

  const todosList = useList(($todos), ({ name, completed }) => (
    <TodoItem name={name} completed={completed} />
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
