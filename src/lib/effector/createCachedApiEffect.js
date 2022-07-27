import { createEffect, createEvent, createStore } from 'effector'

export const createCachedApiEffect = (callback) => {
  const addToCache = createEvent()
  const clearCache = createEvent()

  const request = createEffect()

  const $cache = createStore({})
    .on(addToCache, (state, payload) => ({
      ...state,
      [payload.key]: payload.value
    }))
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

  return {
    fx: request,
    clearCacheEvent: clearCache,
  }
}