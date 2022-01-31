import { React, useState, useEffect } from "react";
import Form from "./Form";
import "../index.css";

const Todo = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(props.name);
  const [visibleButton, setVisibleButton] = useState(false);

  const isCompletedIcon = props.isComplete
    ? "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E"
    : "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E";

  const changeInputValue = (e) => {
    setNewName(e.target.value);
  };
  const handleMouseOver = () => {
    setVisibleButton(true);
  };

  const handleMouseOut = () => {
    setVisibleButton(false);
  };

  function updateName(e) {
    if (e.key === "Enter" || e.type === "blur") {
      if (newName === "") {
        return;
      }
      setIsEditing(false);
      props.editTask(props.id, newName);
    }
  }

  return (
    <li
      className="task-wrapper"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img
        src={isCompletedIcon}
        onClick={() => props.completeTask(props.id)}
        style={isEditing ? { opacity: 0 } : { opacity: 1 }}
      />

      {isEditing ? (
        <input
          autoFocus
          className="todo-edit"
          value={newName}
          onChange={changeInputValue}
          id={props.id}
          onBlur={updateName}
          onKeyPress={updateName}
        />
      ) : (
        <label
          className={props.isComplete ? "task-label-cross" : "task-label"}
          onDoubleClick={() => setIsEditing(true)}
        >
          {props.name}
        </label>
      )}

      {isEditing ? (
        ""
      ) : (
        <button
          className="delete-task-btn"
          onClick={() => props.deleteTask(props.id)}
          style={visibleButton ? { opacity: 1 } : { opacity: 0 }}
        >
          ×
        </button>
      )}
    </li>
  );
};
export default Todo;
