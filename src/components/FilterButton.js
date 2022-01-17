import { useState } from "react";

const FilterButton = (props) => {

    return (
        <div className='button-nav' style={ props.counterTasks === 0 ? {display: "none"} : {display: "flex"}} >
            <span className='button-nav-left'> {props.counterUncompletedTasks} {props.counterUncompletedTasks === 1 ? "item left" : "items left"}</span>
            <ul className='buttons-list'>
                <li onClick={props.filterAllTasks}><a>All</a></li>
                <li onClick={props.filterActiveTasks}><a>Active</a></li>
                <li><a>Completed</a></li>
            </ul>
            <span className='button-nav-clear' onClick={props.clearCompletedTasks}>{(props.counterTasks - props.counterUncompletedTasks) > 0 ? "Clear completed" : ""}</span>
        </div>
    );
}

export default FilterButton;