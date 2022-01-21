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
} from "reactstrap";

export default function NewOfficer({ show4, setShow4 }) {
  const closeHandle = () => {
    setShow4(false);
  };
  return (
    <Modal isOpen={show4}>
      <ModalHeader charCode="Y" toggle={closeHandle}>
        <strong>Information about new officer</strong>
      </ModalHeader>
      <ModalBody className="steps-form">
        <Form>
          <FormGroup>
            <Input name="First name" placeholder="First name" type="text" />
            <Input name="Last name" placeholder="Last name" type="text" />
          </FormGroup>
          <FormGroup>
            <Input name="Email" placeholder="Email" type="email" />
            <Button>Check</Button>
          </FormGroup>
          <FormGroup>
            <Input
              name="Mobile number"
              placeholder="Mobile number"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Input id="exampleSelect" name="select" type="select">
              <option>Nationality</option>
              <option>Nationality 2</option>
              <option>Nationality 3</option>
              <option>Nationality 4</option>
              <option>Nationality 5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Input id="exampleSelect" name="select" type="select">
              <option>Role</option>
              <option>Role 2</option>
              <option>Role 3</option>
              <option>Role 4</option>
              <option>Role 5</option>
            </Input>
          </FormGroup>

          <Card className="popup-detail">
            <CardTitle tag="h3">
              <strong>What will happen next?</strong>
            </CardTitle>
            <CardText>
              1.We will contact you directly to confirm the appointment
            </CardText>
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
