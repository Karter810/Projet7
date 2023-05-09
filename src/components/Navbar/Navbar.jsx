import { NavLink } from 'react-router-dom'
import "./Navbar.css";

export default function Navbar() {



    return (
        <nav className='nav'>
            <ul className='nav_list'>
                <li className='nav_lien'>
                    <NavLink  to='/Kasa/'>
                        Accueil
                    </NavLink>
                </li>
                <li className='nav_lien'>
                    <NavLink to='/about'>
                        A propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}