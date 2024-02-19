import { Navbar, Container, Nav } from "react-bootstrap";

const Template = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container>
        {console.log(Navbar)}
        <Navbar.Brand href="#home">
          <img
            src="/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Formation React"
          />{" "}
          Formation React
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Template;
