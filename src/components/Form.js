import { useState } from "react";


const Form = () => {

const [screen, setScreen] = useState("a")
const changeInputValue = (e) => {
    setScreen(e.target.value)
}

    return (
        <div>
        <form className='form-wrapper'>
            <div className='arrow-btn'>{"❯"}</div>
            <input className='todo' placeholder="What needs to be done?" 
            onChange={(e) => changeInputValue(e)}></input>
        </form>
			<h1>{screen}</h1>
        </div>
    );
}

export default Form;