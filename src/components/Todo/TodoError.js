import React from 'react'
import { useStore } from "effector-react";
import {$error} from "../../models/todos";

const TodoError = () => {
    const error = useStore($error);

    if (!error) return null

    return <p>{error}</p>
}

export default TodoError