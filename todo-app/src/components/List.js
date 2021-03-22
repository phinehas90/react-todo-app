import React from 'react';

const TodoList = (props) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                <li>{props.inputText}</li>
            </ul>
        </div>
    )
}

export default TodoList