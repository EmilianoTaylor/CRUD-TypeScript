import { Link } from 'react-router-dom'
import './siteList.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function UpperList () {

	function Header () {
		return (
			<header>
				<SignedOut>
					<SignInButton />
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</header>
		)
	}

	return (
		<ul className='upperList'>
			<li><Link to="/notes">Страница заметок</Link></li>
			<li><Link to="/">Главная страница</Link></li>
			<li id='liHead'><Header /></li>
		</ul>
	)
}