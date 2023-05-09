import Logo from '../../assets/logos/logo.png'
import Navbar from '../Navbar/Navbar'
import "./Header.css";

export default function Header() {
	return (
		<header className='header'>
			<h1>
				<img src={Logo} alt="kasa, location d'appartements" />
			</h1>
			<Navbar />
		</header>
	)
}