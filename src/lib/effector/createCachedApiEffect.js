import { createEffect, createEvent, createStore } from 'effector'

export const createCachedApiEffect = (callback) => {
  const addToCache = createEvent()
  const removeFromCache = createEvent()
  const clearCache = createEvent()

  const request = createEffect()

  const $cache = createStore({})
    .on(addToCache, (state, payload) => ({
      ...state,
      [payload.key]: payload.value
    }))
    .on(removeFromCache, (state, payload) => {
      const entries = Object.entries(state)
      const filteredEntries = entries.filter(([key]) => key !== payload)

      return Object.fromEntries(filteredEntries)
    })
    .reset(clearCache)

  request.use((params) => {
    return new Promise(async (resolve, reject) => {
      const cacheKey = JSON.stringify(params)
      const cache = $cache.getState()

      if (cacheKey in cache) {
        const cacheValue = cache[cacheKey]
        return resolve(cacheValue)
      }

      try {
        const response = await callback(params)
        addToCache({ key: cacheKey, value: response })
        return resolve(response)
      } catch (e) {
        return reject(e)
      }
    })
  })

  return request
}