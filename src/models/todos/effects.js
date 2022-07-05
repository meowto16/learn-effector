import { createEffect } from "effector"

export const validateFx = createEffect(([todo, todos]) => {
    if (todos.some(item => item.name === todo)) {
        throw 'This todo is already on the list'
    }

    if (!todo.trim().length) {
        throw 'Required field'
    }

    return null
})