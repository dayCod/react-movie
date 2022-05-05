import { Container, Row, Col, Button } from 'react-bootstrap';
const Intro = () => {
  return (
    <div id="intro-section">
      <Container className="intro d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div id="title" className="text-white text-center">
              Anda Jomblo ?
            </div>
            <div id="title" className="text-white text-center">
              Mending Nonton di Sini Aje
            </div>
            <div id="title" className="text-white text-center mb-4">
              Daripada di Bioskop, Maluuu
            </div>
            <Button className="btn-dark text-center" id="detailButton">
              Lihat Selengkapnya
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
