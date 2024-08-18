import { Col, Container, Row, Button } from "react-bootstrap";

const Intro = () => {
    return (
        <div className="intro"> 
        <container className="text-white text-center d-flex justify-content-center align-items-center">
          <Row>
            <Col>
            <div className="title">Nonton Gratis</div>
            <div className="title">Gausah Bacot</div>
            <div className="introButton mt-4 text-center">
                <Button variant="dark">Lihat Semua List</Button>
            </div>
            </Col>
          </Row>
        </container>
      </div>
    )
}

export default Intro