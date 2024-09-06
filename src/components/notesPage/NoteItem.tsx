import { NoteInterface } from "./notesPage";
import { toggleNote, deleteNote } from "../../store/note";
import { useDispatch } from "react-redux";
import { MdModeEditOutline } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";




type NoteItemProps = {
	note: NoteInterface;
	editNote: NoteInterface | null;
	getEditNote: (editNote: NoteInterface) => void;
	setEditNote: (editNote: NoteInterface) => void;
};

const NoteItem = ({
	note,
	editNote,
	getEditNote,
	setEditNote,
}: NoteItemProps) => {
	const dispatch = useDispatch();

	const handleToggleNoteChange = () =>
		dispatch(toggleNote({ noteId: note.id }));


	const handleDeleteNoteClick = () => {
		dispatch(deleteNote({ noteId: note.id }));
		if (note.id === editNote?.id) {
			setEditNote({ id: "", task: "", completed: false });
		}
	};


	const handleGetEditNoteClick = () => getEditNote(note);




	return (
		<li className="todo-list__item">
			<label
				htmlFor={note.id}
				style={
					note.completed
						? { textDecoration: "line-through" }
						: { textDecoration: "none" }
				}	
				className="todo-list__label"
			>
				<input
					onChange={handleToggleNoteChange}
					checked={note.completed ? true : false}
					type="checkbox"
					id={note.id}
					className="todo-list__checkbox"
				/>
				{note.task}
			</label>
			<div className="todo-list__btns-box">
				<button 
	onClick={handleDeleteNoteClick}
	className="todo-list__btn todo-list__edit-btn">
	<FaTrashAlt />
	</button>
				<button
					onClick={handleGetEditNoteClick}
					className="todo-list__btn todo-list__delete-btn"
				>
	<MdModeEditOutline />
	
	</button>
			</div>
		</li>
	);
	};

export default NoteItem;