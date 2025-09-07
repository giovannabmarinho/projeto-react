import { Nav, Navbar } from "react-bootstrap";
import "./NavBar.css"

export function NavBar() {
    return <Navbar expand="md" className="bg-body-tertiary px-4" sticky="top">
        <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/lista">Lista de séries</Nav.Link>
            <Nav.Link href="/cadastro">Cadastro de série</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
        </Nav>
    </Navbar>
}