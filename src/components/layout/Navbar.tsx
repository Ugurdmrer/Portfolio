import { Button, Container, Nav, Navbar as Navbarbs } from "react-bootstrap";
import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <Navbarbs expand="lg" className="bg-white shadow-sm mb-3">
      <Container>
        <Navbarbs.Toggle aria-controls="basic-navbar-nav" />
        <Navbarbs.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-3 my-2">
              <Nav.Link className="text-primary border border-primary rounded px-4 " to="/" as={NavLink}>
                Home
              </Nav.Link>
            <Nav.Link className="text-primary border border-primary rounded px-4" to="/Services" as={NavLink}>
              Services
            </Nav.Link>
            <Nav.Link className="text-primary border border-primary rounded px-4" to="/About" as={NavLink}>
              About
            </Nav.Link>
            <Nav.Link className="text-primary border border-primary rounded px-4" to="/Contact" as={NavLink}>
              Contact
            </Nav.Link>
          </Nav>
          <Button variant="outline-primary">Lang</Button>
        </Navbarbs.Collapse>
      </Container>
    </Navbarbs>
  );
}
