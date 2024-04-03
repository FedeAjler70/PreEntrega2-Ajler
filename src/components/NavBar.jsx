import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { NavLink } from "react-router-dom"

import { CartWidget } from "./CartWidget"

const NavBar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/" id="BrandName">
          Secur-IT
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/category/Cámaras analógicas" as={NavLink}>
            Cámaras HDCVI
          </Nav.Link>
          <Nav.Link to="/category/Grabadoras" as={NavLink}>
            Cámaras IP
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}
export default NavBar
