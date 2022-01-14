import React, { useState } from "react";
import './index.css';
import Todo from './components/Todo'
import Form from './components/Form'
import FilterButton from './components/FilterButton';

function App() {
	const [tasks, setTasks] = useState([])
	// const [counterTask, setCounterTask] = useState(0)


	function deleteTask(id) {
		const remainingTasks = tasks.filter(task => id !== task.id);
		setTasks(remainingTasks);
	}

	function completeTask(id) {
		const updatedTasks = tasks.map(task => {
		  if (id === task.id) {
			return {...task, isComplete: !task.isComplete}
		  }
		  return task;
		});
		setTasks(updatedTasks);
	  }

	//   function amountUncompleteTask(id) {
	// 	  setCounterTask()

	//   }
	  const counterTask = tasks.filter(task => task.isComplete === false).length
	console.log(tasks)
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
							completeTask={completeTask} />)}
					</ul>
					<FilterButton counterTask ={counterTask}/>
				</div>
			</div>
		</div>
	);
}

export default App;

