import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Search, Bell, PersonCircle} from 'react-bootstrap-icons';

function NetflixNav() {
  return (
    <Navbar expand="lg"  bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home"><img src="../assets/logo.png" alt="Netflix-logo" className="imageStyle"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#home" className="hover fw-bold">Home</Nav.Link>
            <Nav.Link href="#home" className="hover fw-bold">TV Shows</Nav.Link>
            <Nav.Link href="#home" className="hover fw-bold">Movies</Nav.Link>
            <Nav.Link href="#home" className="hover fw-bold">Recently Added</Nav.Link>
            <Nav.Link href="#home" className="hover fw-bold">My List</Nav.Link>
          </Nav>
            <div className="d-flex align-items-center">
              <Search className='icons'/>
              <div id="kids" className="fw-bold">KIDS</div>
              <Bell className='icons'/>
              <PersonCircle className='icons'/>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NetflixNav
