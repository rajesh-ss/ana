
import '../App.css';
import '../css/style.min.css';
import 'font-awesome/css/font-awesome.min.css'
import React from 'react';
import "bootstrap";
import '../../node_modules/jquery/dist/jquery.slim';
//import "../node_modules/jquery/dist/jquery.min.js";
import { Navbar, Nav, NavDropdown, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import "@popperjs/core";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

{/*         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}



const NavBar = () => {


    const navigate = useNavigate();

    
    return (
        <>

                <Navbar bg="light" expand="lg" className="" >
                    <Container className="border-top border-color-primary border-bottom border-primary">
                        {/*     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                        <Navbar.Toggle aria-controls="basic-navbar-nav " />
                        <Navbar.Collapse id="basic-navbar-nav " >
                            <Nav className="me-auto flex-grow-1  pb-0  mb-0" >
                               <Nav.Link href="/" className="text-truncate mb-3  mt-0 mt-lg-0 mx-sm-auto mx-lg-0 pb-0" to="/profile"> Profile</Nav.Link>
                                <Nav.Link href="/community" className="text-truncate mb-3   mx-sm-auto mx-lg-1  pb-0 "to="/login">community</Nav.Link>
                                <Nav.Link href="#" className="text-truncate mb-3   mx-sm-auto mx-lg-1  pb-0">Cart</Nav.Link>
                                <Nav.Link href="#" className="text-truncate mb-3   mx-sm-auto mx-lg-1  pb-0">Checkout</Nav.Link>
                            </Nav>
                            
                            <Nav className="me-auto mt-0 pb-0 ">
                                <Nav.Link className="text-truncate mb-3  mx-sm-auto mx-lg-1  pb-0 "><Link to= '/signin'  style={{textDecoration: 'none', }}>Login</Link></Nav.Link>
                                <Nav.Link className="text-truncate mb-3 mx-sm-auto mx-lg-1  pb-0 " ><Link to= '/signup' style={{textDecoration: 'none', }}>Sign up</Link></Nav.Link>
                            </Nav>
                           
                        </Navbar.Collapse>
                    </Container>
                     
                </Navbar>
          

        </>


    );

}


export default NavBar;