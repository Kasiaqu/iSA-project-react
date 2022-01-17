import React, { useState, useEffect } from "react";
import './index.css';
import Todo from './components/Todo'
import Form from './components/Form'
import FilterButton from './components/FilterButton';

function App() {
	const [tasks, setTasks] = useState([])
	// const [counterTask, setCounterTask] = useState(0)
	const [isAllSelected, setIsAllSelected] = useState(false)

	function deleteTask(id) {
		const remainingTasks = tasks.filter(task => id !== task.id);
		setTasks(remainingTasks);
	}

	function completeTask(id) {
		const updatedTasks = tasks.map(task => {
			if (id === task.id) {
				return { ...task, isComplete: !task.isComplete }
			}
			return task;
			// {...task}
		});
		setTasks(updatedTasks);
	}
	function completeAllTasks() {
		const isAllCompleted = tasks.every(task => task.isComplete)
		const completedTasks = tasks.map(task => ({ ...task, isComplete: !isAllCompleted}))
		setTasks(completedTasks);
	}


	
	function clearCompletedTasks() {
		const clearedTasks = tasks.filter(task => task.isComplete === false)
		setTasks(clearedTasks);
	}


	////
	function filterActiveTasks() {
		const activeTasks = tasks.map(task => ({...task, isComplete = false}))
		setTasks(activeTasks);
	}
	function filterAllTasks() {
		const allTasks = tasks.map(task => task)
		setTasks(allTasks);
	}
	/////

	const counterTasks = tasks.length
	console.log(counterTasks)
	const counterUncompletedTasks = tasks.filter(task => task.isComplete === false).length
	console.log(tasks)
	return (

		<div className="app">
			<div className='content'>
				<h1 className="header">todos</h1>
				<div className='wrapper'>
					<Form setTasks={setTasks} completeAllTasks={completeAllTasks} />
					<ul className='task-list'>
						{tasks.map((task) => <Todo
							key={task.id}
							name={task.name}
							id={task.id}
							isComplete={task.isComplete}
							deleteTask={deleteTask}
							completeTask={completeTask} />)}
					</ul>
					<FilterButton counterUncompletedTasks={counterUncompletedTasks}
						counterTasks={counterTasks}
						clearCompletedTasks={clearCompletedTasks}
						filterAllTasks={filterAllTasks}
						filterActiveTasks={filterActiveTasks}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;

