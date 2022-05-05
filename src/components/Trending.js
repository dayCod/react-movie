import { Card, Button, Container, Col, Row } from 'react-bootstrap';
import DuneImage from '../assets/images/trending/dune.jpg';
import Everything from '../assets/images/trending/everything.jpg';
import Infinite from '../assets/images/trending/infinite.jpg';
import Joker from '../assets/images/trending/joker.jpg';
import Lightyear from '../assets/images/trending/lightyear.jpg';
import Morbius from '../assets/images/trending/morbius.jpg';

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <br />
        <h1 className="text-white text-center " id="trending-title">
          TRENDING
        </h1>
        <Row className="mb-3">
          <Col className="col-md-4 p-5">
            <Card style={{ width: '18rem' }} className="p-2 border-0">
              <Card.Img variant="top" src={DuneImage} alt="Dune Movies" style={{ height: '400px' }} />
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
              <Card.Img variant="top" src={Everything} alt="Dune Movies" style={{ height: '400px' }} />
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
              <Card.Img variant="top" src={Infinite} alt="Dune Movies" style={{ height: '400px' }} />
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
              <Card.Img variant="top" src={Joker} alt="Dune Movies" style={{ height: '400px' }} />
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
              <Card.Img variant="top" src={Lightyear} alt="Dune Movies" style={{ height: '400px' }} />
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
              <Card.Img variant="top" src={Morbius} alt="Dune Movies" style={{ height: '400px' }} />
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

export default Trending;
