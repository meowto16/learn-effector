import React from 'react'
import {$filter, FILTER_STATUS, filterChanged} from "../../models/todos";
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