import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavHeader: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Task Weaver AI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Tasks</Nav.Link>
            <Nav.Link href="https://reachforthesky.github.io/task-weaver-ai/blog">Blog</Nav.Link>
            {/* Add more Nav.Link or Nav.Item here as needed */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavHeader;