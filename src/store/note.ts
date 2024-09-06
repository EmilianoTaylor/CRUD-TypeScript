import { createSlice } from "@reduxjs/toolkit";
import { NoteInterface } from "../components/notesPage/notesPage";

interface NotesListInterface {
	notes: NoteInterface[]
}

const initialState: NotesListInterface = {
	notes: []
}

export const noteSlice = createSlice({
	name: "note",
	initialState,
	reducers: {
			addNote: (state, {payload: {task, id, completed}}) => {
					state.notes.push({id, task, completed})
			},
			deleteNote: (state, {payload: {noteId}}) => {
					state.notes = state.notes.filter(note => note.id !== noteId)
			},
			editNote: (state, {payload: {editedNote}}) => {
					console.log(editedNote)
					state.notes = state.notes.map(note => note.id === editedNote.id ? editedNote : note);
			},
			toggleNote: (state, {payload: {noteId}}) => {
					state.notes = state.notes.map(note => note.id === noteId ? {...note, completed: !note.completed} : note);
			},
	}
})

// actions for telling reducer what to do with state, they can also include payload for changing state
export const {addNote, deleteNote, editNote, toggleNote} = noteSlice.actions;

// reducer to change the state
export default noteSlice.reducer;