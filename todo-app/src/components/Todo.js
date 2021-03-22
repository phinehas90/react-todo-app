import React from 'react';

const Todo = (props) => {
    
    const deleteHandler = () => {
        props.setTodos(props.todos.filter(el => el.id !== props.todo.id))
        console.log(props.todo)
    }

    const completeHandler = () => {
        props.setTodos(props.todos.map(item=>{
            if(item.id === props.todo.id){
                return {
                    ...item, completed: !props.todo.completed
                }
            }
            return item
        }))
    }
    return (
        <div className="todo">
            <li className={props.todo.completed ? "todo-item completed": "todo-item"}>{props.todo.text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;