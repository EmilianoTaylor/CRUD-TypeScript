
import NoteItem from "./NoteItem";
import { NoteInterface } from "./notesPage";

type NoteListProps = {
	notes: NoteInterface[];
	noteFilterValue: string;
	getEditNote: (editNote: NoteInterface) => void;
	setEditNote: (editNote: NoteInterface) => void;
	editNote: NoteInterface | null;
};

const NoteList = ({
	notes,
	noteFilterValue,
	editNote,
	getEditNote,
	setEditNote,
}: NoteListProps) => {
	return (
		<ul className="note-list">
			{notes
				.filter((note) => (noteFilterValue === "all" ? true : note.completed))
				.map((note) => (
					<NoteItem
						key={note.id}
						note={note}
						editNote={editNote}
						getEditNote={getEditNote}
						setEditNote={setEditNote}
					/>
				))}
		</ul>
	);
};

export default NoteList;