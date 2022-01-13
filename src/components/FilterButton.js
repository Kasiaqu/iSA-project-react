const FilterButton = () => {
    return (
        <div className='button-nav'>
            <span>2 items left</span>
            <ul className='buttons-list'>
                <li><a>All</a></li>
                <li><a>Active</a></li>
                <li><a>Completed</a></li>
            </ul>
            <span className='button-nav-clear'>Clear completed</span>
        </div>
    );
}

export default FilterButton;