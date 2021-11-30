import { Container, Navbar, Nav } from 'react-bootstrap';
import '../../index.css'



const NavBar = () => {

  return ( 
    <>
    <div className="navbar-div">
      <Navbar className="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
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
            <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
            <Nav.Link href="http://localhost:3000/gallery" >Gallery</Nav.Link>
            <Nav.Link href="http://localhost:3000/menu">Menu</Nav.Link>
            <Nav.Link href="http://localhost:3000/contact">Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    </>
   );
}
 
export default NavBar;