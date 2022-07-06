import React from 'react'
import {$filter, filterChanged} from "../../models/todos/model";
import { FILTER_STATUS } from '../../models/todos/constants'
import {useStore} from "effector-react";

const TodoFilter = () => {
    const currentFilter = useStore($filter)
    const filters = Object.values(FILTER_STATUS)

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