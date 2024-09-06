
import { useEffect } from "react";
import "./OfferToLogin.css"
import UpperList from "../upperList/UpperList";

function closeWindow () {
	document.getElementById('offerToLogin')?.classList.remove('open')
}

export default function OfferToLogin () {
	
	
	

	useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('offerToLogin')?.classList.add('open')
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

			return (
			<>

				<UpperList />
				<div className="offerToLogin" id="offerToLogin">
					<div className="offerBox">
						<p>Чтобы воскользоваться необходимым функционалом необходимо авторизироваться,
						Вы хотите продолжить?</p>
						<ul className="btnList">
							<li><button>Да</button></li>
							<li><button onClick={closeWindow}>Нет</button></li>
						</ul>
					</div>
				</div>
			</>
			)
}

