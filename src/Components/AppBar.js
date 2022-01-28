import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Container, Nav, Navbar } from 'react-bootstrap';



function AppBar(){
    return (
        <Navbar>
            <Container className="navigation">
                <Navbar.Brand>User Budget</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#Log out">Log out</Nav.Link>
                </Nav>
                
            </Container>
        </Navbar>
    )
}




export default AppBar;