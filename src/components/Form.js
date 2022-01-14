import React, { useState } from "react";
import Todo from './../components/Todo'

const Form = (props) => {
    const [name, setName] = useState("")

    const addTask = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const task = { name, id: Date.now(), isComplete: false }
            props.setTasks((prevValue) => {
                return [...prevValue, task]
            })
            // console.log(task)
            setName("")
        }
    }

    const changeInputValue = (e) => {
        setName(e.target.value)
    }
    return (
        <div>
            <form className='form-wrapper'>
                <div className='arrow-btn'>{"❯"}</div>
                <input className='todo' placeholder="What needs to be done?"
                    value={name}
                    onChange={changeInputValue} onKeyPress={addTask}></input>
            </form>
        </div>
    );
}
export default Form;