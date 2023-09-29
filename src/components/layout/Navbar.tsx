import { Container, Nav, Navbar as Navbarbs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Navbarbs expand="lg" className="bg-white shadow-sm mb-3">
      <Container>
        <Navbarbs.Toggle aria-controls="basic-navbar-nav" />
        <Navbarbs.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/Services" as={NavLink}>
              Services
            </Nav.Link>
            <Nav.Link to="/About" as={NavLink}>
              About
            </Nav.Link>
            <Nav.Link to="/Contact" as={NavLink}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbarbs.Collapse>
      </Container>
    </Navbarbs>
  );
}
