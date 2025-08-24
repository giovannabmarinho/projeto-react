import { NavLink } from "react-router";

export function NavBar() {
    return <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/lista">Lista de séries</NavLink></li>
            <li><NavLink to="/cadastro">Cadastro de série</NavLink></li>
        </ul>
    </nav>
}