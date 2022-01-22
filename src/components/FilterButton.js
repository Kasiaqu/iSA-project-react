const FilterButton = (props) => {

    return (
        <div className='button-nav' style={ props.counterTasks === 0 ? {display: "none"} : {display: "flex"}} >
            <span className='button-nav-left'> {props.counterUncompletedTasks} {props.counterUncompletedTasks === 1 ? "item left" : "items left"}</span>
            <ul className='buttons-list'>
                <li onClick={() => props.setFilter("All")} className={props.filter === "All" ? "li-active" : "li-inactive"}>All</li>
                <li onClick={() => props.setFilter("Active")} className={props.filter === "Active" ? "li-active" : "li-inactive"}>Active</li>
                <li onClick={() => props.setFilter("Completed")} className={props.filter === "Completed" ? "li-active" : "li-inactive"}>Completed</li>
            </ul>
            <span className='button-nav-clear' onClick={props.clearCompletedTasks}>{(props.counterTasks - props.counterUncompletedTasks) > 0 ? "Clear completed" : ""}</span>
        </div>
    );
}

export default FilterButton;