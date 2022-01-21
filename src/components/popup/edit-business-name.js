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
  FormFeedback,
  Input,
} from "reactstrap";

export default function EditBusinessName({ show, setShow }) {
  const closeHandle = () => {
    setShow(false);
  };
  return (
    <Modal isOpen={show}>
      <ModalHeader charCode="Y" toggle={closeHandle}>
        <strong>Edit business name</strong>
      </ModalHeader>
      <ModalBody className="steps-form">
        <Form>
          <FormGroup>
            <Input name="Current name" placeholder="Current name" type="text" />
          </FormGroup>
          <FormGroup>
            <Input name="New name" placeholder="New name" type="text" />
            <Button>Check</Button>
          </FormGroup>
          <FormFeedback>
            "It seems like it is available in Singapore", or "Please enter
            another name, it seems like it is not available in Singapore
          </FormFeedback>
          <Card className="popup-detail">
            <CardTitle tag="h3">
              <strong>What will happen next?</strong>
            </CardTitle>
            <CardText>
              1.We will contact you directly to confirm the amendment
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
