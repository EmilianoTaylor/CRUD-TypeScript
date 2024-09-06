
import './App.css'

import OfferToLogin from './components/loginOffer/OfferToLogin'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UpperList from './components/upperList/UpperList';
import NotesPage from './components/notesPage/notesPage';




function App() {

	return (
	<BrowserRouter>
		<Routes>
			<Route path='*' element={<OfferToLogin/>}/>
			<Route path='/login' element={<UpperList/>}/>
			<Route path='/notes' element={<NotesPage />}/>
		</Routes>
	</BrowserRouter>
	)



}

export default App

