import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => { 
    return (
        // <header>
        //     <h1>Starlight Store</h1>
        //     <nav>
        //         <ul>
        //             <li>Accesorios</li>
        //             <li>Figuras</li>
        //             <li>Resina</li>
        //         </ul>
        //     </nav>
        //     <CartWidget />
        // </header>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Starlight Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#accesorios">Accesorios</Nav.Link>
                    <Nav.Link href="#figuras">Figuras</Nav.Link>
                    <Nav.Link href="#resina">Resina</Nav.Link>
                </Nav>
                <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar