import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'

function Todo({ text, todo, todos, setTodos }) {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

const completeHandler = () => {
    setTodos(todos.map(item => {
        if(item.id === todo.id) {
            return{
                ...item, completed: !item.completed
            }
        }
        return item;
    }))
}

    return (
        <div className="todo sel">
            <div className="set">

            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className='complete-btn'><AiFillCheckCircle /></button>
            <button onClick={deleteHandler} className='trash-btn'><BsFillTrashFill /></button>
            </div>
        </div>
    )
}

export default Todo