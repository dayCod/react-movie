import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <div>
      <Navbar className="navbar-dark mb-5">
        <Container>
          <Navbar.Brand href="/">React Film</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending-title">Trending</Nav.Link>
            <Nav.Link href="#superhero-title">SuperHero</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
