import { v4 as uuid } from 'uuid';

import { $todos } from './store'
import { addTodo, removeTodo } from './events'

$todos
  .on(addTodo, (todos, payload) => {
    console.log(payload)
    return [
      ...todos,
      { id: uuid(), name: payload.name },
    ]
  })
  .on(removeTodo, (todos, payload) => {
    return todos.filter(todo => todo.id !== payload.id)
  })
