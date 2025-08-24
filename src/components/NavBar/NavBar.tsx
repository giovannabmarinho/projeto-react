import { NavLink } from "react-router";
import "./NavBar.css"

export function NavBar() {
    return <nav className="navbar">
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/lista">Lista de séries</NavLink></li>
            <li><NavLink to="/cadastro">Cadastro de série</NavLink></li>
            <li><NavLink to="/sobre">Sobre</NavLink></li>
        </ul>
    </nav>
}