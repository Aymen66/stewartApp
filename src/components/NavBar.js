import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import React from "react";

// setExpanded(expanded ? false : "expanded")

function NavBar() {
const [expanded, setExpanded] = React.useState(false);
function toggle(){
    setExpanded(function (prevExpanded){
        if (prevExpanded){
            return false 
        } else{
            return true
        }

    })
}
  return (
   <>
    <Navbar collapseOnSelect  bg="dark" variant="dark" expanded={expanded} expand="lg">
      <Container >
        <Navbar.Brand href="#home">Stewart Consulting</Navbar.Brand>
        <Navbar.Toggle onClick={toggle} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to={"/"}>Home</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to={"/Testimonials"}>Testimonials</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to={"/Blog"}>Blog</Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} eventKey={0} as={Link} to={"/Contact"}>Contact</Nav.Link>



          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>

   </>
  );
}

export default NavBar;