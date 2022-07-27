import React from 'react'

import { clearCacheTodosFx } from '../../models/todos/model'

const TodoCacheControl = () => {
  return <button onClick={clearCacheTodosFx}>Clear cache for todos</button>
}

export default TodoCacheControl