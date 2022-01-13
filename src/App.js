import './index.css';

function App() {
	return (
		<div className="app">
			<div className='content'>
				<h1 className="header">todos</h1>
				<div className='wrapper'>
					<form className='form-wrapper'>
						<div className='arrow-btn'>{"❯"}</div>
						<input className='todo' placeholder="What needs to be done?"></input>
					</form>
					<div className='task-underline' />

					<ul className='task-list'>
					<li className='task-wrapper'>
							<img src='data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E' />
							<label className='task-label'>Zadanie2</label>
							<button className='delete-task-btn'>×</button>
						</li>
						<li className='task-wrapper'>
							<img src='data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E' />
							<label className='task-label'>Zadanie2 Zadanie2 Zadanie2 Zadanie2 Zadanie2 Zadanie2 Zadanie2 Zadanie2 Zadanie2  Zadanie2 Zadanie2 Zadanie2 Zadanie2</label>
							<button className='delete-task-btn'>×</button>
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

				<div className='content-underline1'></div>
				<div className='content-underline2'></div>
			</div>
		</div>
	);
}

export default App;				