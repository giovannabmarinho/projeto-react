import "./NavBar.css"
import { Container, Nav, Navbar } from "react-bootstrap";

export function NavBar() {
    return <Navbar className="bg-body-tertiary">
        <Container>
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/lista">Lista de séries</Nav.Link>
                <Nav.Link href="/cadastro">Cadastro de série</Nav.Link>
                <Nav.Link href="/sobre">Sobre</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
}