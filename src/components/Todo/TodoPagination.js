import React from 'react'
import {$page, pageChanged} from "../../models/todos/model";
import {useStore} from "effector-react";

const TodoPagination = () => {
    const currentPage = useStore($page)
    const pages = ['1', '2', '3', '4', '5']

    return (
      <div style={{ display: 'flex' }}>
          {pages.map(page => (
            <button style={{ margin: '10px', background: 'none', border: '1px solid blue', borderRadius: '5px', color: 'blue', cursor: 'pointer' }} key={page} disabled={page === currentPage} onClick={() => pageChanged(page)}>
                {page}
            </button>
          ))}
      </div>
    )
}

export default TodoPagination