import { createEvent } from 'effector'

export const changed = createEvent()
export const remove = createEvent()
export const toggle = createEvent()
export const submit = createEvent()
export const submitted = createEvent()

export const todosPageMounted = createEvent()
export const filterChanged = createEvent()