import './index.css';

function App() {
  return (
    <div className="app">
      <div className='content'>
        <h1 className="header">todos</h1>
        <form>
          <div className='arrow-btn'>{">"}</div>
          <input className='todo' placeholder="What needs to be done?"></input>
        </form>
        <ul className='task-list'>
          <li className='task-wrapper'>
              <input className='task-status' type="checkbox"></input>
              <label className='task-label'>Zadanie</label>
              <button className='delete-task-btn'>X</button>
          </li>
          <li className='task-wrapper'>
              <input className='task-status' type="checkbox"></input>
              <label className='task-label'>Zadanie2</label>
              <button className='delete-task-btn'>X</button>
          </li>
        </ul>
        <div className='button-nav'>
          <span>items left</span>
          <ul className='buttons-list'>
            <li><a>All</a></li>
            <li><a>Active</a></li>
            <li><a>Completed</a></li>
          </ul>
          <span>Clear completed</span>
        </div>
      </div>

    </div>
  );
}

export default App;


{/* <ul
				role="list"
				className="todo-list stack-large stack-exception"
				aria-labelledby="list-heading"
			>
				<li className="todo stack-small">
					<div className="c-cb">
						<input id="todo-0" type="checkbox" defaultChecked={true} />
						<label className="todo-label" htmlFor="todo-0">
							Eat
						</label>
					</div>
					<div className="btn-group">
						<button type="button" className="btn">
							Edytuj <span className="visually-hidden">Eat</span>
						</button>
						<button type="button" className="btn btn__danger">
							Usuń <span className="visually-hidden">Eat</span>
						</button>
					</div>
				</li>
				<li className="todo stack-small">
					<div className="c-cb">
						<input id="todo-1" type="checkbox" />
						<label className="todo-label" htmlFor="todo-1">
							Sleep
						</label>
					</div>
					<div className="btn-group">
						<button type="button" className="btn">
							Edytuj <span className="visually-hidden">Sleep</span>
						</button>
						<button type="button" className="btn btn__danger">
							Usuń <span className="visually-hidden">Sleep</span>
						</button>
					</div>
				</li> */}
