import React from "react";
import { Navbar, Nav, Form, Button, FormControl, Container } from "react-bootstrap";
import brandimage from "../assets/brandimage.jpg"
const NavbarComponent = () => {
  return (
    <Navbar expand="lg" bg="light">
      <br />
      <img
        src={brandimage}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt=""
      ></img>
      <br />
      <br />
      <Navbar.Brand href="/">PastelTetris</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/play">Play</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavbarComponent;
