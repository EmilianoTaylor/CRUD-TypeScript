

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../store/note";
import { ulid } from "ulid";




const AddNote = () => {
	const dispatch = useDispatch();
	const [task, setTask] = useState("");
	const [error, setError] = useState("");


	const handleAddTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (task.trim().length < 5) {
			setError("Minimum allowed task length is 5");
		} else if (task.trim().length > 50) {
			setError("Maximum allowed task length is 50");
		} else {
			dispatch(addNote({ task, id: ulid(), completed: false }));
			setTask("");
		}
	};


	const handleUpdateNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTask(e.target.value);
		if (task.trim().length > 5 && task.trim().length < 50) {
			setError("");
		}
	};

	return (
		<form onSubmit={handleAddTaskSubmit} className="form">
			<div className="form__control">
				<input
					onChange={handleUpdateNoteChange}
					value={task}
					type="text"
					className="form__input"
					placeholder="Add note..."
				/>
				{error && <p className="form__error-text">{error}</p>}
			</div>
			<button className="btn form__btn">Add Note</button>
		</form>
	);
};

export default AddNote;
