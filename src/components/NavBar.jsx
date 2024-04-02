import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (<Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home" id='BrandName'>Secur-IT</Navbar.Brand>
        <Nav className="me-auto">
         <Nav.Link to="/category/cámaras" as={NavLink}>Cámaras HDCVI</Nav.Link>
         <Nav.Link to="/category/grabadoras" as={NavLink}>Cámaras IP</Nav.Link>
         <Nav.Link to="#pricing" as={NavLink}>DVRs</Nav.Link>
         <Nav.Link to="#pricing" as={NavLink}>NVRs</Nav.Link>
        </Nav>
    <CartWidget />
    </Container>
    </Navbar>

    );
};