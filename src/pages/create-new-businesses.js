import React from "react";
import {
  Card,
  CardText,
  CardTitle,
  Col,
  Container,
  Label,
  List,
  Row,
  Input,
} from "reactstrap";
import facebook from "../images/share-facebook.png";
import linkedin from "../images/share-linkedin.png";
import whatsapp from "../images/share-whatsapp.png";
import xls from "../images/xls.png";
import email from "../images/email-icon.png";

export default function CreateNewBusiness() {
  return (
    <Card className="section-main">
      <Container>
        <Card className="detailpage-bar">
          <List>
            <li className="active">
              <a href="#">Invite to create new businesses</a>
            </li>
          </List>
        </Card>
        <Card className="detailpage-main create-new-businesses">
          <Card className="cnb-top">
            <Row>
              <Col xs="8">
                <Card className="cnb-top-left">
                  <CardTitle tag="h2">
                    <strong>
                      Invite a friend to start a business and you will both get
                      a month off your subscription plan
                    </strong>
                  </CardTitle>
                  <CardText>
                    If you enjoy building new businesses with kimbocorp, share
                    it with friends and enjoy a month off your subscription plan
                  </CardText>
                </Card>
              </Col>
              <Col xs="4">
                <Card className="cnb-top-right">
                  <CardTitle tag="h5">
                    <strong>Share your link</strong>
                  </CardTitle>
                  <CardText>
                    Copy your personal referral link and share it with friends
                    and associates
                  </CardText>
                  <span className="link-block"></span>
                  <CardText>
                    X months free in potential subscription credits
                  </CardText>
                  <Card className="copy-share">
                    <Card className="copy-btn">
                      <a href="#">Copy</a>
                    </Card>
                    <Card className="cs-share">
                      <Label>Share via</Label>
                      <a href="#">
                        <img src={facebook} />
                      </a>
                      <a href="#">
                        <img src={linkedin} />
                      </a>
                      <a href="#">
                        <img src={whatsapp} />
                      </a>
                    </Card>
                  </Card>
                </Card>
              </Col>
            </Row>
          </Card>
          <Card className="profile-detail cnb-bottom">
            <CardTitle tag="h2" className="text-center">
              <strong>Refer via email</strong>
            </CardTitle>
            <CardText>
              Enter your contacts and we will invite them for you
            </CardText>
            <Input
              id="exampleEmail"
              name="Type email address"
              placeholder="Type email address"
              type="email"
            />
            <CardText>X months free in potential subscription credits</CardText>
            <Card className="send-import">
              <Card className="send-btn">
                <a href="#">Send Invite</a>
              </Card>
              <Card className="si-import">
                <Label>or import</Label>
                <a href="#">
                  <img src={xls} />
                </a>
                <a href="#">
                  <img src={email} />
                </a>
              </Card>
            </Card>
          </Card>
        </Card>
      </Container>
    </Card>
  );
}
