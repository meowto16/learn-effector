import { v4 as uuid } from 'uuid';
import { sample } from 'effector'

import { $todo, $todos } from './store'
import { submitted, remove, toggle, submit } from './events'
import {fetchTodosFx, validateFx} from "./effects"

$todos
  .on(submitted, (todos, name) => {
    return [
      ...todos,
      { id: uuid(), name, completed: false },
    ]
  })
  .on(toggle, (todos, payload) => {
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
  .on(remove, (todos, payload) => {
    return todos.filter(todo => todo.id !== payload.id)
  })
  .on(fetchTodosFx.doneData, (todos, response) => {
    return [
        ...todos,
        ...(response.map((item) => ({
          id: item.id,
          name: item.title,
          completed: item.completed,
        })))
    ]
  })

sample({
  clock: submit,
  source: [$todo, $todos],
  target: validateFx,
})

sample({
  clock: validateFx.done,
  source: $todo,
  target: submitted,
})

submit.watch(e => e.preventDefault())