import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


function NavBar() {
  return (
    <Navbar bg="dark" variant="dark"
      className="fixed-nav bg-black opacity-75 text-white">
      <Container>
        <Navbar.Brand href="/#about">Reinder Vos de Wael</Navbar.Brand>
        <Nav className="me-auto flex-grow-1 justify-content-evenly">
          <Nav.Link href="#about"><strong>About</strong></Nav.Link>
          <Nav.Link href="#resume"><strong>Resume</strong></Nav.Link>
          <Nav.Link href="#contact"><strong>Contact</strong></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
