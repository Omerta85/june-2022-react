import React from 'react';

import css from "./Todo.module.css"
const Todo = ({todo}) => {
    return (
        <div className={css.todo}>
            {JSON.stringify(todo)}
        </div>
    );
};
export {Todo};