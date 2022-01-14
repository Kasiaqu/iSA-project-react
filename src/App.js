import React, { useState } from "react";
import './index.css';
import Todo from './components/Todo'
import Form from './components/Form'
import FilterButton from './components/FilterButton';

function App() {
	const [tasks, setTasks] = useState([])

	function deleteTask(id) {
		const remainingTasks = tasks.filter(task => id !== task.id);
		setTasks(remainingTasks);
	}
	return (

		<div className="app">
			<div className='content'>
				<h1 className="header">todos</h1>
				<div className='wrapper'>
					<Form setTasks={setTasks} />
					<ul className='task-list'>
						{tasks.map((task) => <Todo 
						key={task.id}
						name={task.name}
						id={task.id}
						isComplete={task.isComplete}
						deleteTask={deleteTask}
						 />)}
					</ul>
					<FilterButton />
				</div>
			</div>
		</div>
	);
}

export default App;