import React, { useId } from 'react'

import { submit, changed, $todo } from '../../models/todos'
import {useStore} from "effector-react";

const TodoControl = () => {
  const formId = useId()

  const value = useStore($todo);

  return (
    <div>
      <form name={formId}>
        <input
            name="todo-name"
            type="text"
            onChange={e => changed(e.target.value)}
            value={value}
        />
        <button onClick={submit}>Создать</button>
      </form>
    </div>
  )
}

export default TodoControl
