import React from 'react'

const TodoItem = ({ name, completed, author }) => {
  return (
    <div style={{
        display: 'block',
        border: '1px solid black',
        padding: '15px'
    }}>
      <h3>Task: {name}</h3>
      {author && <p>Author: {author}</p>}
      <label style={{ display: 'flex' }}>
        <p>Ready: </p>
        <input readOnly type="checkbox" checked={completed} />
      </label>
    </div>
  )
}

export default TodoItem
