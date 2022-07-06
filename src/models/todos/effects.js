import { createEffect } from "effector"

export const fetchTodosFx = createEffect(async (params) => {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    const searchParams = new URLSearchParams(params || {})
    const query = searchParams.toString() ? `?${searchParams.toString()}` : ''
    const response = await fetch(url + query)

    return response.json()
})

export const validateFx = createEffect(([todo, todos]) => {
    if (todos.some(item => item.name === todo)) {
        throw 'This todo is already on the list'
    }

    if (!todo.trim().length) {
        throw 'Required field'
    }

    return null
})