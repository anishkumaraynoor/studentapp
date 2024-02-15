import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';






function Header() {
  return (
    <div style={{position:'absolute', width:'100%'}}>
      <Navbar expand="lg" className="bg-primary">
      <Container>
        <Link to={'/'} style={{textDecoration:'none'}}><Navbar.Brand href="">EDUCATION</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link style={{color:'black', textDecoration:'none'}} to={'/register'}>Register</Link></Nav.Link>
            <Nav.Link><Link style={{color:'black', textDecoration:'none'}} to={'/details'}>Student Details</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header