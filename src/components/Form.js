import React from 'react'
import { BiPlusMedical } from 'react-icons/bi'


function Form({ setInputText, inputText, setTodos, todos, setStatus }) {

    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 },])
        setInputText('');
    }

    const statusHandler = (e) => {
setStatus(e.target.value)
    }

    return (
        <form action="" className='for'>
            <input value={inputText} onChange={inputTextHandler} type="text" className='todo-input' />
            <button onClick={submitTodoHandler} className='todo-button' type='submit'>
                <BiPlusMedical />
            </button>
            <div>
                <select onChange={statusHandler} name="todos" id="" className='fiter-todo'>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form