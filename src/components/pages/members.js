import react from "react";
import {Container, Card, CardTitle, CardText, Row, Col, Button} from "reactstrap";
import member1 from "../../images/member1.png";
import member2 from "../../images/member2.png";
import member3 from "../../images/member3.png";

export default function Memberspage () {
 
return(
    
<Card className="members-section">
        <Container>
            <Card className="section-title">
                <CardTitle tag="h1" className="text-center">
                <strong>We found something</strong>
            </CardTitle>
            </Card>   
            
            <Card className="members-block">
                <CardText>
                     You're already a member of:
                </CardText>   
            <Row>
                <Col xs="4">
                    <Card >
                        <CardTitle tag="h5">
                           <strong>Pony</strong>
                        </CardTitle>
                        <CardText>
                            Kimbocorp.com/pony
                        </CardText>   
                    </Card>   

                </Col>

                <Col xs="3">
                    <Card >
                        <CardText>
                          Not incorporated
                        </CardText>   
                    </Card>   

                </Col>

                <Col xs="3">
                    <Card >
                        <Card className="members-thumbnail">
                            <img src={ member1 }/>
                            <img src={ member2 }/>
                            <img src={ member3 }/>
                        </Card>
                        <CardText>
                          Three members
                        </CardText>   
                    </Card>   

                </Col>

                <Col xs="2">
                    <Card >
                        <Button>
                            Launch
                        </Button>
                    </Card>   

                </Col>
            </Row>

            <Row>
                <Col xs="4">
                    <Card >
                        <CardTitle tag="h5">
                           <strong>Indigo</strong>
                        </CardTitle>
                        <CardText>
                            Kimbocorp.com/indigo
                        </CardText>   
                    </Card>   

                </Col>

                <Col xs="3">
                    <Card >
                        <CardText>
                        incorporated
                        </CardText>   
                    </Card>   

                </Col>

                <Col xs="3">
                    <Card >
                        <Card className="members-thumbnail">
                            <img src={ member1 }/>
                            <img src={ member2 }/>
                        </Card>
                        <CardText>
                          Two members
                        </CardText>   
                    </Card>   

                </Col>

                <Col xs="2">
                    <Card >
                        <Button>
                            Launch
                        </Button>
                    </Card>   

                </Col>
            </Row>

            <Row>
                <Col xs="4">
                    <Card >
                        <CardTitle tag="h5">
                           <strong>Hooligan</strong>
                        </CardTitle>
                        <CardText>
                            Kimbocorp.com/hooligan
                        </CardText>   
                    </Card>   

                </Col>

                <Col xs="3">
                    <Card >
                        <CardText>
                         incorporated
                        </CardText>   
                    </Card>   

                </Col>

                <Col xs="3">
                    <Card >
                        <Card className="members-thumbnail">
                            <img src={ member1 }/>
                        </Card>
                        <CardText>
                          One members
                        </CardText>   
                    </Card>   

                </Col>

                <Col xs="2">
                    <Card >
                        <Button>
                            Launch
                        </Button>
                    </Card>   

                </Col>
            </Row>

            </Card>
            <Card className="section-bottom">
                <CardText>
                Want to create a new company account? <a href="#">Start here</a>
                </CardText>
            </Card>   
        </Container>
</Card>
)

}