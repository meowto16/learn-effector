import {attach, createEvent, createEffect, forward, createStore, restore} from "effector";
import {fetchTodos} from "../../services/todos";
import {FILTER_STATUS} from "./constants";

export const todosPageMounted = createEvent()
export const filterChanged = createEvent()

export const fetchTodosFx = createEffect(fetchTodos)

export const $todos = createStore([])
export const $filter = restore(filterChanged, FILTER_STATUS.ALL)

$todos
    .on(fetchTodosFx.doneData, (todos, response) => {
        return response.map((item) => ({
            id: item.id,
            name: item.title,
            completed: item.completed,
        }))
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
