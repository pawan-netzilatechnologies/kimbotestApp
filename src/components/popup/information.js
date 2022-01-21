import React from "react";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Form,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  Label,
  Row,
  Col,
} from "reactstrap";

export default function Information({ show10, setShow10 }) {
  const closeHandle = () => {
    setShow10(false);
  };

  return (
    <Modal className="information-popup" isOpen={show10}>
      <ModalHeader charCode="Y" toggle={closeHandle}>
        <strong>Information about First Name Last Name</strong>
      </ModalHeader>
      <ModalBody className="steps-form">
        <Form>
          <Row>
            <Col xs="5">
              <Label>Current ID number</Label>
              <FormGroup>
                <Input name="1234567F" placeholder="1234567F" type="text" />
              </FormGroup>
              <Label>Upload Passport copy</Label>
              <FormGroup>
                <Input id="exampleFile" name="file" type="file" />
              </FormGroup>
            </Col>
            <Col xs="7">
              <Label>Current registered address</Label>
              <FormGroup>
                <Input
                  name="Address line 1"
                  placeholder="Address line 1"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  name="Address line 2"
                  placeholder="Address line 2"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Input name="Country" placeholder="Country" type="text" />
                <Input name="Post code" placeholder="Post code" type="text" />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col xs="5">
              <Label>New ID number</Label>
              <FormGroup>
                <Input name="1234567F" placeholder="1234567F" type="text" />
              </FormGroup>
              <Label>Upload Passport copy</Label>
              <FormGroup>
                <Input id="exampleFile" name="file" type="file" />
              </FormGroup>
            </Col>
            <Col xs="7">
              <Label>New registered address</Label>
              <FormGroup>
                <Input
                  name="Address line 1"
                  placeholder="Address line 1"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  name="Address line 2"
                  placeholder="Address line 2"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Input name="Country" placeholder="Country" type="text" />
                <Input name="Post code" placeholder="Post code" type="text" />
              </FormGroup>
            </Col>
          </Row>
          <Card className="popup-btn">
            <a href="#">Contact us</a>
            <Button>Agree and submit</Button>
          </Card>
        </Form>
      </ModalBody>
    </Modal>
  );
}
