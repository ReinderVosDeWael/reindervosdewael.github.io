import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="sm" expanded={expanded}
      className="fixed-nav bg-black opacity-75 text-white">
      <Container>
        <Navbar.Brand href="/#about">Reinder Vos de Wael</Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(!expanded)}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto flex-grow-1 justify-content-evenly">
            <Nav.Link onClick={() => setExpanded(false)}
              href="#about"><strong>About</strong></Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)}
              href="#resume"><strong>Resume</strong></Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)}
              href="#contact"><strong>Contact</strong></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
