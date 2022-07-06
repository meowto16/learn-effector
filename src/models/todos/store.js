import { createStore, restore } from 'effector'
import {changed, filterChanged, submitted} from "./events"
import {validateFx} from "./effects";

export const $todos = createStore([])
export const $todo = restore(changed, '').reset(submitted)

export const $error = restore(validateFx.failData, '').reset(changed)

export const FILTER_STATUS = {
    ALL: 'all',
    COMPLETED: 'completed',
    NOT_COMPLETED: 'not_completed',
}

export const $filter = restore(filterChanged, FILTER_STATUS.ALL)
