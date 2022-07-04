import React, { useId } from 'react'
import { addTodo } from '../../models/todos'

const TodoControl = () => {
  const formId = useId()

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = document[formId]
    const name = form['todo-name'].value

    addTodo({
      name
    })

    form.reset()
  }

  return (
    <div>
      <form name={formId} onSubmit={handleSubmit}>
        <input name="todo-name" type="text" />
        <input type="submit" value="Создать" />
      </form>
    </div>
  )
}

export default TodoControl
