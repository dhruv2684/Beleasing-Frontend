import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
//icon
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  return (
    <div>

      {/* hdr */}
      <Navbar expand="lg" className="bg-body-tertiary p-0 align-items-center" >
        <Container className=''>
          <Navbar.Brand href="/"><img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2022/12/beleasing2.svg" alt="" /></Navbar.Brand>
          <Navbar.Brand href="/" className='fs-6 ms-3 mb-0 word color '>LUXURY CARS FOR YOU</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="">
              <Nav.Link href="/" className=' p-md-4 bele-hov fw mt-2'>HOME</Nav.Link>
              <NavDropdown title="OFFER" id="basic-nav-dropdown" className=' p-md-4 bele-hov fw'>
                <NavDropdown.Item href="/sedan">SEDAN</NavDropdown.Item>
                <NavDropdown.Item href="/hatchback">HATCHBACK</NavDropdown.Item>
                <NavDropdown.Item href="/combi">COMBI</NavDropdown.Item>
                <NavDropdown.Item href="/suv">SUV</NavDropdown.Item>
                <NavDropdown.Item href="/all-cars">ALL CARS</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about" className=' p-md-4 bele-hov fw mt-2'>ABOUT</Nav.Link>
              <Nav.Link href="/contact" className=' p-md-4 bele-hov fw mt-2'>CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;