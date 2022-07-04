import { v4 as uuid } from 'uuid';

import { $todos } from './store'
import { addTodo, removeTodo, toggleCompleteTodo } from './events'

$todos
  .on(addTodo, (todos, payload) => {
    return [
      ...todos,
      { id: uuid(), name: payload.name, completed: false },
    ]
  })
  .on(toggleCompleteTodo, (todos, payload) => {
    return todos.map(todo => {
      if (todo.id === payload.id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }

      return todo
    })
  })
  .on(removeTodo, (todos, payload) => {
    return todos.filter(todo => todo.id !== payload.id)
  })
