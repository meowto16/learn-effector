import React from 'react'
import {$page, pageChanged} from "../../models/todos/model";
import {useStore} from "effector-react";

const TodoPagination = () => {
    const currentPage = useStore($page)
    const pages = ['1', '2', '3', '4', '5']

    return (
      <div>
          {pages.map(page => (
            <button key={page} disabled={page === currentPage} onClick={() => pageChanged(page)}>
                {page}
            </button>
          ))}
      </div>
    )
}

export default TodoPagination