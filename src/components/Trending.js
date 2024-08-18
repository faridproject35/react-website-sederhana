import { Card, Container, Row, Col, Image } from "react-bootstrap";
import CivilWarImage from "../assets/images/trending/Civil War.jpeg"
import stingImage from "../assets/images/trending/sting.jpeg"
import WarfareImage from "../assets/images/trending/Warfare.jpeg"
import ANCIKAImage from "../assets/images/trending/ANCIKA.jpeg"
import AgakLaenImage from "../assets/images/trending/Agak Laen.jpeg"
import HoursWithGASPARImage from "../assets/images/trending/Hours With GASPAR.jpeg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                            <Image src={CivilWarImage} alt="Civil War" className="images" />
                            <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Civil War</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Card.Text className="text-left">
                                Last updated 3 mins ago
                            </Card.Text>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={stingImage} alt="sting" className="images" />
                            <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Sting</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Card.Text className="text-left">
                                Last updated 3 mins ago
                            </Card.Text>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={WarfareImage} alt="Warfare" className="images" />
                            <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Warfare</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Card.Text className="text-left">
                                Last updated 3 mins ago
                            </Card.Text>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={ANCIKAImage} alt="ANCIKA" className="images" />
                            <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">ANCIKA</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Card.Text className="text-left">
                                Last updated 3 mins ago
                            </Card.Text>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={AgakLaenImage} alt="Agak Laen" className="images" />
                            <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Agak Laen</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Card.Text className="text-left">
                                Last updated 3 mins ago
                            </Card.Text>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={HoursWithGASPARImage} alt="Hours With GASPAR" className="images" />
                            <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">24 Hours With GASPAR</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Card.Text className="text-left">
                                Last updated 3 mins ago
                            </Card.Text>
                        </div>
                    </div>
                </Card>
            </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Trending;
