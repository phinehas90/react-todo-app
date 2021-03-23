import React from 'react';
import Modal from 'react-modal';
import {useState} from 'react';

const Todo = (props) => {
    
    const deleteHandler = () => {
        props.setTodos(props.todos.filter(el => el.id !== props.todo.id))
    }
    const [modalState, setModalState] = useState(false)
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

    const toggleModal = () => {
        setModalState(!modalState)
        console.log(props.todo.id)
    }

    const updateHandler = () => {
        props.setTodos(props.todos.map(item => {
            if(item.id === props.todo.id){
                return {
                    ...item, text: item.text
                }
            }
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
            <button onClick={toggleModal} className="complete-btn">
                <Modal isOpen={modalState} className="complete-btn">Update</Modal>
            </button>
        </div>
    )
}

export default Todo;