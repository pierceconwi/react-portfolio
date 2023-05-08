import React from 'react';
import Image from 'next/image'
import selfie  from '../../public/22hs_sm.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    return (
        <>
        <div>
            <Navbar bg="dark" variant="dark" expand="md" fixed="top" >
            <Container>
                <Navbar.Brand href="#home"><Image className="border-radiusImportant" src={selfie} alt="logo" width="50" height="50" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#services" >Services</Nav.Link>
                    <Nav.Link href="#projects" >Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
        </>
    );
}