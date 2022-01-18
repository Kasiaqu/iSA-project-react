import React, { useState, useEffect } from "react";
import './index.css';
import Todo from './components/Todo'
import Form from './components/Form'
import FilterButton from './components/FilterButton';

function App() {
	const [tasks, setTasks] = useState([])
	const [filter, setFilter] = useState("All")
	const [isEditing, setIsEditing] = useState(false);
	const [newName, setNewName] = useState("IMIE")


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
		const completedTasks = tasks.map(task => ({ ...task, isComplete: !isAllCompleted }))
		setTasks(completedTasks);
	}

	function clearCompletedTasks() {
		const clearedTasks = tasks.filter(task => task.isComplete === false)
		setTasks(clearedTasks);
	}
	function filterTasks(task) {
		if (filter === "Completed") {
			return task.isComplete
		}
		if (filter === "Active") {
			return !task.isComplete
		}
		return true
	};
	function editTask(id, newName) {

		const editedTaskList = tasks.map(task => {
			if (id === task.id) {
				setIsEditing(!isEditing);
				return { ...task, name: newName }
			}
			return task;
		});
		setTasks(editedTaskList);
	}



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
						{tasks.filter(filterTasks).map((task) => <Todo
							key={task.id}
							name={task.name}
							id={task.id}
							isComplete={task.isComplete}
							deleteTask={deleteTask}
							completeTask={completeTask}
							editTask={editTask}
							isEditing={isEditing}
							setNewName={setNewName}
						/>)}
					</ul>
					<FilterButton counterUncompletedTasks={counterUncompletedTasks}
						counterTasks={counterTasks}
						clearCompletedTasks={clearCompletedTasks}
						setFilter={setFilter}

					/>
				</div>
			</div>
		</div>
	);
}

export default App;

// return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;