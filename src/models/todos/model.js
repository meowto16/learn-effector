import {attach, createEvent, createEffect, forward, createStore, restore, merge} from "effector";
import {fetchTodos} from "../../services/todos";
import {COMPLETED_FILTER, TODOS_LIMIT_PER_RESPONSE} from "./constants";

export const todosPageMounted = createEvent()
export const filterChanged = createEvent()
export const pageChanged = createEvent()

export const $todos = createStore([])
export const $page = createStore(1).reset(filterChanged)
export const $filter = restore(filterChanged, COMPLETED_FILTER.ALL)

export const fetchTodosFx = createEffect(fetchTodos)
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

$todos.on(fetchTodosFx.doneData, (todos, response) => {
  return response.map((item) => ({
    id: item.id,
    name: item.title,
    completed: item.completed,
  }))
})

$page.on(pageChanged, (_, page) => page)

forward({
  from: merge([todosPageMounted, filterChanged, pageChanged]),
  to: fetchTodosWithParamsFx,
})