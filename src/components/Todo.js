import { React, useState } from "react";
import Form from './Form'
import '../index.css'

const Todo = (props) => {

    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(props.name)


    const isCompletedIcon = props.isComplete ?
        'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E'
        : 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E'

    const changeInputValue = (e) => {
        setNewName(e.target.value)

    }

    function updateName(e) {
        if(e.key === 'Enter' || e.type === 'blur') {
        setIsEditing(false)
        props.editTask(props.id, newName)
    }
}

    const viewTask =
        <li className='task-wrapper'>
            <img src={isCompletedIcon} onClick={() => props.completeTask(props.id)} />
            <label className={props.isComplete ? 'task-labes-cross' : 'task-label'}
                onDoubleClick={() => setIsEditing(true)}>{props.name}</label>
            <button className='delete-task-btn'
                onClick={() => props.deleteTask(props.id)}>×</button>
        </li>

    const editingTask =
        <li className='task-wrapper'>
            <img src={isCompletedIcon} style={{opacity: 0}} />
            <input className="todo-edit" value={newName} onChange={changeInputValue}
               id={props.id} onBlur={updateName} onKeyPress={updateName} />
            {/* <button className='delete-task-btn'  style={{opacity: 0}}
                onClick={() => props.deleteTask(props.id)}>×</button> */}
        </li>


    return (

        // <div>{props.isEditing ? editingTask : viewTask}</div>
        <div>{isEditing ? editingTask : viewTask}</div>

    );
}
export default Todo;