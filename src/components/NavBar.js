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
// setExpanded(expanded ? false : "expanded")
import CloseButton from 'react-bootstrap/CloseButton';

function NavBar() {
const [expanded, setExpanded] = React.useState(false);
const [isClose, setIsClose] = React.useState(false);
const [closeBtn, setCloseBtn] = React.useState(false);


function toggle(){
  setIsClose(current => !current);
    setExpanded(function (prevExpanded){
        if (prevExpanded){
            return false 
        } else{
            return true
        }

    })
    setCloseBtn(true)
}
function closeHandle(){
  setCloseBtn(false)
  setIsClose(current => !current);

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
   
   

    <Navbar collapseOnSelect  variant="dark" expanded={expanded} expand="lg">
      <Container >        

        <Navbar.Brand href="#home">
       
      <img className='logo' src={Logo}/>
      {/* {window.innerWidth < 600?<Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              // className="search-hover"
              aria-label="Search"
              
            ></Form.Control>
            
            <Button variant="outline-success">
          <BsSearch /></Button>
          </Form>: null} */}
        </Navbar.Brand>

        <Navbar.Toggle
        style={{
          display: isClose ? 'none' : "",
          // color: isClose ? 'white' : '',
        }} onClick={toggle} aria-controls="basic-navbar-nav" />
        {closeBtn?<CloseButton variant="white"  onClick={closeHandle}/> :null}
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
              // className="search-hover"
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