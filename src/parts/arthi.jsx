import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './arthi.css'



function NavScrollExample() {
  return (

    <Navbar style={{ backgroundColor: 'seagreen' }} variant="dark" expand="xxl">
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: 'red' }}>GroupR</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{ color: 'black' }}>Home</Nav.Link>
            <NavDropdown title="Link" bg="dark" variant="dark" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4" style={{ color: 'black' }}>
                Favorite Movies
              </NavDropdown.Item>

              <NavDropdown.Item href="#action5" style={{ color: 'black' }}>
                Favorite Series
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" style={{ color: 'black' }}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavScrollExample;
