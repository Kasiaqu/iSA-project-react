import { useState, useEffect } from "react";

const Form = (props) => {
	const [name, setName] = useState("");

	const addTask = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			if (name === "") {
				return;
			}
			const task = { id: Date.now(), name, isComplete: false };
			props.setTasks((prevValue) => {
				return [...prevValue, task];
			});
			setName("");

			fetch("http://localhost:7000/tasks", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(task),
			})
				.then((response) => response.json())
				.then((data) => {
					console.log("Success:", data);
				})
				.catch((error) => {
					console.error("Error:", error);
				});
		}
	};

	const changeInputValue = (e) => {
		setName(e.target.value);
	};

	return (
		<div>
			<form className="form-wrapper" onSubmit={(e) => e.preventDefault()}>
				<div
					className="arrow-btn"
					style={{
						opacity: props.counterTasks ? "1" : "0",
						color: props.isAllTasksDone
							? "var(--darkerGrey)"
							: "var(--lightGrey)",
					}}
					onClick={props.completeAllTasks}
				>
					{"❯"}
				</div>
				<input
					className="todo"
					placeholder="What needs to be done?"
					value={name}
					onChange={changeInputValue}
					onKeyPress={addTask}
				></input>
			</form>
		</div>
	);
};
export default Form;
