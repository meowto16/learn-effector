import React from 'react'
import {useStore} from "effector-react";

import {$filter, filterChanged} from "../../models/todos/model";
import { COMPLETED_FILTER } from '../../models/todos/constants'

const TodoFilter = () => {
    const currentFilter = useStore($filter)
    const filters = Object.values(COMPLETED_FILTER)

    return (
        <div style={{ display: 'grid', gridGap: '15px', gridTemplateColumns: '1fr 1fr 1fr', maxWidth: '400px' }}>
            {filters.map((filter) => (
                <label key={filter} >
                    <p>{filter}</p>
                    <input
                        checked={currentFilter === filter}
                        onChange={() => filterChanged(filter)}
                        type="checkbox"
                    />
                </label>
            ))}
        </div>
    )
}

export default TodoFilter