import { v4 as uuid } from 'uuid';
import {attach, forward, sample} from 'effector'

import {$todo, $todos, FILTER_STATUS} from './store'
import {submitted, remove, toggle, submit, todosPageMounted, filterChanged} from './events'
import { fetchTodosFx, validateFx } from "./effects"

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
    return response.map((item) => ({
      id: item.id,
      name: item.title,
      completed: item.completed,
    }))
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

forward({
  from: todosPageMounted,
  to: fetchTodosFx,
})

forward({
  from: filterChanged,
  to: attach({
    effect: fetchTodosFx,
    mapParams: (currentFilter) => {
      if (currentFilter === FILTER_STATUS.ALL) return {}

      return { completed: currentFilter === FILTER_STATUS.COMPLETED }
    }
  })
})

submit.watch(e => e.preventDefault())