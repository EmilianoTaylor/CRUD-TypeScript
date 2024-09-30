import './loginPage.css'
import UpperList from "../upperList/UpperList";


export default function DeveloperList () {


	return (
		<>
			<UpperList />
				<div className="inputForm">
					<input type="text" />
					<input type="text" />
					<button>Войти</button>
				</div>
		</>
	)
}