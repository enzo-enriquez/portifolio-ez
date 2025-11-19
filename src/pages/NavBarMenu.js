import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import Meraki from "../imagens/logomeraki.jpeg"

function NavBarMenu() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand>
          <Link to='/'><img className='Logo' src={Meraki} alt='Logo Padaria'/></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             <Nav.Link className="menu-link" as={Link} to='/'>Home</Nav.Link>
             <NavDropdown title="Técnico" id="basic-nav-dropdown">
              <NavDropdown.Item className="menu-link" as={Link} to='/modelagem-sistemas'>Desenvolvimento de sistemas</NavDropdown.Item>
              <NavDropdown.Item className="menu-link" as={Link} to='/Banco-dados'>Banco de dados</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Matérias" id="basic-nav-dropdown">
              <NavDropdown.Item className="menu-link" as={Link} to='/matematica'>Matemática</NavDropdown.Item>
              <NavDropdown.Item className="menu-link" as={Link} to='/natureza'>
                Natureza
              </NavDropdown.Item>
              <NavDropdown.Item className="menu-link" as={Link} to='/humanas'>Humanas</NavDropdown.Item>
              <NavDropdown.Item className="menu-link" as={Link} to='/linguagens'>Linguagens</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarMenu