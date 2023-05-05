import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from "react";
import Logo from "../stewcon_logo2_0.png"
import { BsSearch } from "react-icons/bs";
import CloseButton from 'react-bootstrap/CloseButton';

function NavBar() {
  const [isShown, setIsShown] = React.useState(false)
  function toggleShown(){
      setIsShown(prevShown => !prevShown)
  }




  return (
   <>
   
   

    <Navbar collapseOnSelect  variant="dark"  expand="lg">
      <Container >        

        <Navbar.Brand as={Link} to={"/"} >
       
      <img className='logo' src={Logo}/>
    
        </Navbar.Brand>

        <Navbar.Toggle onClick={toggleShown}>{isShown?<CloseButton variant="white" ></CloseButton>:null}</Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  eventKey="1"  as={Link} to={"/"}  onClick={() => setIsShown(false)}>Home</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link eventKey="2" onClick={() => setIsShown(false)}  as={Link} to={"/Testimonials"}>Testimonials</Nav.Link>
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
            <Nav.Link eventKey="3" onClick={() => setIsShown(false)}  as={Link} to={"/Blog"}>Blog</Nav.Link>
            <Nav.Link  eventKey="4" onClick={() => setIsShown(false)} as={Link} to={"/Contact"}>Contact</Nav.Link>



          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              
            ></Form.Control>
            
            <Button variant="outline-success">
          <BsSearch /></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>

   </>
  );
}

export default NavBar;