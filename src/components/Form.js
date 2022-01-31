import { useState, useEffect } from "react"

const Form = (props) => {

    const [name, setName] = useState("")
    // useEffect(() => {
    //     window.localStorage.setItem(`task-storage`, JSON.stringify(props.tasks))
    // }, [props.tasks])

    const addTask = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (name === "") {
                return
            }
            const task = {id: Date.now(), name, isComplete: false }
            props.setTasks((prevValue) => {
                window.localStorage.setItem(`task-storage`, JSON.stringify([...prevValue, task]))
                return [...prevValue, task]
            })
            setName("")
        }
    }

    const changeInputValue = (e) => {
        setName(e.target.value)
    }
    return (
        <div>
            <form className='form-wrapper'>

                <div className='arrow-btn'
                    style={{
                        opacity: props.counterTasks ? '1' : '0',
                        color: props.isAllTasksDone ? "var(--darkerGrey)" : "var(--lightGrey)"
                    }}
                    onClick={props.completeAllTasks}>{"❯"}</div>
                <input className='todo' placeholder="What needs to be done?" value={name}
                    onChange={changeInputValue} onKeyPress={addTask}></input>
            </form>
        </div>
    );
}
export default Form;

