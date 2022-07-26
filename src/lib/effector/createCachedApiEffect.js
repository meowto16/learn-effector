import { createEffect } from 'effector'

export const createCachedApiEffect = (callback) => {
  const request = createEffect()

  request.use(callback)

  return request
}