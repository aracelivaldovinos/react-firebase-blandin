
import { Container, Navbar, Nav } from 'react-bootstrap';
import '../../index.css'



const NavBar = () => {
  return ( 
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <div className="navbar-header">
              <h1 className="header1">Blanca's</h1> 
              <h2 className="header2">Custom</h2>
              <h1 className="header1">Pastries</h1>
            </div> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navber-nav" />
          <Navbar.Collapse id="responsive-navber-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   );
}
 
export default NavBar;