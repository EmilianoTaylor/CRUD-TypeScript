import { Link } from 'react-router-dom'
import './siteList.css'

export default function UpperList () {



	return (
		<ul className='upperList'>
			<li><Link to="/notes">Страница заметок</Link></li>
			<li><Link to="/">Главная страница</Link></li>
			<li id='liHead'><button>login</button></li>
		</ul>
	)
}