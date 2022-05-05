import { Card, Button, Container, Col, Row } from 'react-bootstrap';
import Antman from '../assets/images/superhero/antman.jpg';
import Avenger from '../assets/images/superhero/avenger.jpg';
import Batman from '../assets/images/superhero/batman.jpg';
import Robinhood from '../assets/images/superhero/robinhood.jpg';
import Spiderman from '../assets/images/superhero/spiderman-cover.jpg';
import Superman from '../assets/images/superhero/superman.jpg';

const SuperHero = () => {
  return (
    <div>
      <Container>
        <br />
        <br />
        <h1 className="text-white text-center " id="superhero-title">
          SUPERHERO
        </h1>
        <Row className="mb-3">
          <Col className="col-md-4 p-5">
            <Card style={{ width: '18rem' }} className="p-2 border-0">
              <Card.Img variant="top" src={Antman} alt="Dune Movies" style={{ height: '400px' }} />
              <Card.Body className="text-center bg-dark text-white">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Button variant="primary" className="d-block w-100">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-md-4 p-5">
            <Card style={{ width: '18rem' }} className="p-2 border-0">
              <Card.Img variant="top" src={Avenger} alt="Dune Movies" style={{ height: '400px' }} />
              <Card.Body className="text-center bg-dark text-white">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Button variant="primary" className="d-block w-100">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-md-4 p-5">
            <Card style={{ width: '18rem' }} className="p-2 border-0">
              <Card.Img variant="top" src={Batman} alt="Dune Movies" style={{ height: '400px' }} />
              <Card.Body className="text-center bg-dark text-white">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Button variant="primary" className="d-block w-100">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="col-md-4 p-5">
            <Card style={{ width: '18rem' }} className="p-2 border-0">
              <Card.Img variant="top" src={Robinhood} alt="Dune Movies" style={{ height: '400px' }} />
              <Card.Body className="text-center bg-dark text-white">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Button variant="primary" className="d-block w-100">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-md-4 p-5">
            <Card style={{ width: '18rem' }} className="p-2 border-0">
              <Card.Img variant="top" src={Spiderman} alt="Dune Movies" style={{ height: '400px' }} />
              <Card.Body className="text-center bg-dark text-white">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Button variant="primary" className="d-block w-100">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-md-4 p-5">
            <Card style={{ width: '18rem' }} className="p-2 border-0">
              <Card.Img variant="top" src={Superman} alt="Dune Movies" style={{ height: '400px' }} />
              <Card.Body className="text-center bg-dark text-white">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Button variant="primary" className="d-block w-100">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SuperHero;
