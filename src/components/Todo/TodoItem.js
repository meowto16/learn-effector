import React from 'react'
import { removeTodo } from '../../models/todos'

const TodoItem = ({ id, name }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 20px', gridGap: '15px', maxWidth: '100px', border: '1px solid black', padding: '15px', }}>
      <p>{name}</p>
      <button onClick={() => removeTodo({ id })}>X</button>
    </div>
  )
}

export default TodoItem
