import './index.css';
import Todo from './components/Todo'
import Form from './components/Form'
import FilterButton from './components/FilterButton';


function App() {
	return (
		<div className="app">
			<div className='content'>
				<h1 className="header">todos</h1>
				<div className='wrapper'>
					<Form />
					<ul className='task-list'>
					<Todo />
					<Todo />
					</ul>
					<FilterButton/>
				</div>
			</div>
		</div>
	);
}

export default App;				