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
} from "reactstrap";

export default function Subscription({ show9, setShow9 }) {
  const closeHandle = () => {
    setShow9(false);
  };

  return (
    <Modal isOpen={show9}>
      <ModalHeader charCode="Y" toggle={closeHandle}>
        <strong>Manage subscription plan</strong>
      </ModalHeader>
      <ModalBody className="steps-form">
        <Form>
          <Label>Current plan</Label>
          <FormGroup>
            <Input name="Free" placeholder="Free" type="text" />
          </FormGroup>

          <Label>New plan</Label>
          <FormGroup>
            <Input id="exampleSelect" name="select" type="select">
              <option>Close business</option>
              <option>Business 2</option>
              <option>Business 3</option>
              <option>Business 4</option>
              <option>Business 5</option>
            </Input>
          </FormGroup>

          <Card className="popup-detail">
            <CardTitle tag="h3">
              <strong>What will happen next?</strong>
            </CardTitle>
            <CardText>
              1.We will contact you directly to confirm the cancelation
            </CardText>
            <CardText>2.Refer to our terms of cancelation</CardText>
          </Card>
          <Card className="popup-btn">
            <a href="#">Contact us</a>
            <Button>Agree and submit</Button>
          </Card>
        </Form>
      </ModalBody>
    </Modal>
  );
}