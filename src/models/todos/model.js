import { attach, createEvent, createEffect, forward, createStore, restore, merge, combine } from "effector";
import { persist } from 'effector-storage/query'

import {fetchTodos} from "../../services/todos";
import {fetchUsers} from "../../services/users";

import {COMPLETED_FILTER, TODOS_LIMIT_PER_RESPONSE} from "./constants";

export const todosPageMounted = createEvent()
export const filterChanged = createEvent()
export const pageChanged = createEvent()

export const $todos = createStore([])
export const $users = createStore([])

export const $page = createStore('1').reset(filterChanged)
persist({ store: $page, key: 'page' })

export const $filter = restore(filterChanged, COMPLETED_FILTER.ALL)
persist({ store: $filter, key: 'completed' })

export const $todosMapped = combine([$todos, $users], ([todos, users]) => {
  if (!todos.length || !users.length) return []

  return todos.map((todo) => ({
    id: todo.id,
    name: todo.title,
    completed: todo.completed,
    user: users[todo.userId] || null,
  }))
})

export const fetchTodosFx = createEffect(fetchTodos)
export const fetchUsersFx = createEffect(fetchUsers)

export const fetchTodosWithParamsFx = attach({
  effect: fetchTodosFx,
  source: [$page, $filter],
  mapParams: (params, [page, completedFilter]) => {
    return {
        _limit: TODOS_LIMIT_PER_RESPONSE,
        _start: (page - 1) * TODOS_LIMIT_PER_RESPONSE,
        ...(completedFilter !== COMPLETED_FILTER.ALL && {
            completed: completedFilter === COMPLETED_FILTER.COMPLETED
        })
    }
  }
})

$todos.on(fetchTodosFx.doneData, (_, response) => response)
$users.on(fetchUsersFx.doneData, (_, response) => response)

$page.on(pageChanged, (_, page) => page)

forward({
  from: todosPageMounted,
  to: fetchUsersFx
})

forward({
  from: merge([todosPageMounted, filterChanged, pageChanged]),
  to: fetchTodosWithParamsFx,
})