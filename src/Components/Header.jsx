import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <Navbar style={{background:'linear-gradient(to right,#E6F0FE,#FFFFFF)'}} collapseOnSelect expand="lg" className="shadow-0">
      <Container>
        <Navbar.Brand href="/">
          <img style={{width:'100px'}} src="https://www.freepnglogos.com/uploads/medical-logo-png-14.png" alt="" />
          <h3>Med Hub</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav  className="ms-auto justify-content-evenly">
          <Nav.Link className='mx-3' href="/">Home</Nav.Link>
            <Nav.Link className='mx-3' href="#about">About</Nav.Link>
            <Nav.Link className='mx-3' href="#exp">Services</Nav.Link>
<Nav.Link href="#steps" className='btn btn-primary'>GET STARTED</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header