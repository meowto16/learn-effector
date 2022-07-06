import { createStore, restore } from 'effector'
import { changed, submitted } from "./events"
import { validateFx } from "./effects";

export const $todos = createStore([])
export const $todo = restore(changed, '').reset(submitted)
export const $error = restore(validateFx.failData, '').reset(changed)
