import { Card, Container, Row, Col, Image } from "react-bootstrap";
import AvengerEndGameImage from "../assets/images/superhero/Avenger End Game.jpg"
import BatmanTheDarkKnightImage from "../assets/images/superhero/Batman The Dark Knight.jpg"
import HellboyImage from "../assets/images/superhero/Hellboy.jpg"
import IronManImage from "../assets/images/superhero/Iron Man.jpg"
import ThorImage from "../assets/images/superhero/Thor.jpg"
import SpidermanImage from "../assets/images/superhero/Spiderman.jpg"

const Superhero = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">SUPERHERO MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="movieImage">
                            <Image src={AvengerEndGameImage} alt="Avenger End Game" className="images" />
                            <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Avenger End Game</Card.Title>
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
                            <Image src={BatmanTheDarkKnightImage} alt="Batman The Dark Knight" className="images" />
                            <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Batman The Dark Knight</Card.Title>
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
                            <Image src={HellboyImage} alt="Hellboy" className="images" />
                            <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Hellboy</Card.Title>
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
                            <Image src={IronManImage} alt="Iron Man" className="images" />
                            <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Iron Man</Card.Title>
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
                            <Image src={ThorImage} alt="Thor" className="images" />
                            <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Thor</Card.Title>
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
                            <Image src={SpidermanImage} alt="Spiderman" className="images" />
                            <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Spiderman</Card.Title>
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

export default Superhero;
