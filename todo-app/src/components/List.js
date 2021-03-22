import React from 'react';

import Todo from './Todo'

const TodoList = (props) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {props.todos.map(i=>{
                    return(
                        <Todo key={i.id} todo={i} />
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList