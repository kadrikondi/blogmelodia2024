import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faMessage } from "@fortawesome/free-solid-svg-icons";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
function HeaderBlog() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand>
          {" "}
          <Link to="/">Blog </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              {" "}
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#link">create A blog</Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/users">User</Link>{" "}
            </Nav.Link>
            <Nav.Link href="#link">Aboutus</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link>
              <Button>
                <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
                <Badge bg="secondary">9</Badge>
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderBlog;
