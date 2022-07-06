import React from 'react'

const TodoItem = ({ name, completed }) => {
  return (
    <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 20px',
        gridGap: '15px',
        border: '1px solid black',
        padding: '15px'
    }}>
      <p>{name}</p>
      <input readOnly type="checkbox" checked={completed} />
      <button>X</button>
    </div>
  )
}

export default TodoItem
