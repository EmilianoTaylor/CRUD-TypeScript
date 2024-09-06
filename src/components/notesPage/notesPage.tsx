import { useState } from "react";
import AddNote from "./AddNote";
import EditNote from "./EditNote";
import FilterNote from "./FilterNote"
import NoteList from "./NoteList";
import UpperList from "../upperList/UpperList";
import { useSelector} from "react-redux";
import type { RootState } from "../../store/store";
import '../../App.css'

export interface NoteInterface {
  id: string;
  task: string;
  completed: boolean;
}

export default function NotesPage () {
const [editNote, setEditNote] = useState<NoteInterface | null>(null);
const notes = useSelector((state: RootState) => state.notes.notes);
const [noteFilterValue, setNoteFilterValue] = useState("all");

const getNoteFilterValue = (filterValue: string) =>
	setNoteFilterValue(filterValue);


const getEditNote = (editNote: NoteInterface) => setEditNote(editNote);

	return (

		<>
			<UpperList />
			<main className="app">
				<div className="app__wrapper">
					<div className="app__header">
						<h1 className="app__title">Note App</h1>
					</div>
					<div className="app__inputs-box">
						{editNote?.id ? ( 
							<EditNote editNote={editNote} setEditNote={setEditNote} /> ) : <AddNote/>}
						<FilterNote getNoteFilterValue={getNoteFilterValue} />
					</div>
					<NoteList 
					notes={notes}
          noteFilterValue={noteFilterValue}
          getEditNote={getEditNote}
          setEditNote={setEditNote}
          editNote={editNote}/>
				</div>
			</main>
		</>
	)
}