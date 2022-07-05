import React from 'react'
import { remove as removeTodo, toggle as toggleCompleteTodo } from '../../models/todos'

const TodoItem = ({ id, name, completed }) => {
  return (
    <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 20px',
        gridGap: '15px',
        maxWidth: '100px',
        border: '1px solid black',
        padding: '15px'
    }}>
      <p>{name}</p>
      <input type="checkbox" onChange={() => toggleCompleteTodo({ id })} checked={completed} />
      <button onClick={() => removeTodo({ id })}>X</button>
    </div>
  )
}

export default TodoItem
