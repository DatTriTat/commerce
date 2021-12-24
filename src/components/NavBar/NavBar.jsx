import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">PC MARKET</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#pricing">PC Deals</Nav.Link>
            <NavDropdown title="Components" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">CPU</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">RAM</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">VGA</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Power</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Motherboard
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Case</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Accessories</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Account</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
