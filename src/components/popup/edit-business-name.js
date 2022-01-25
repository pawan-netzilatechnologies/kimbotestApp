import { useState } from "react";
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
  const [currentName, setCurrentName] = useState("");
  const [newName, setNewName] = useState("");
  const [error, setError] = useState(false);
  const closeHandle = () => {
    setShow(false);
  };
  const saveData = () => {
    setError(false)
    if(newName === ''){
      setError(true)
    }
  }
  return (
    <Modal isOpen={show}>
      <ModalHeader charCode="Y" toggle={closeHandle}>
        <strong>Edit business name</strong>
      </ModalHeader>
      <ModalBody className="steps-form">
        <Form>
          <FormGroup>
            <Input 
              name="Current name" 
              onChange={(ev) =>{
                setCurrentName(ev.target.value)
              }} 
              placeholder="Current name" 
              type="text" 
              value={currentName}
            />
          </FormGroup>
          <FormGroup>
            <div>
            <Input 
              name="New name" 
              placeholder="New name" 
              type="text" 
              value={newName}
              onChange={(ev) =>{
                setNewName(ev.target.value)
              }}
              invalid={error}
            />
            {error ? <p className="required-text">"It seems like it is available in Singapore", or "Please enter another name, it seems like it is not available in Singapore"</p> : ''}
            </div>
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
            <Button onClick={saveData}>Agree and submit</Button>
          </Card>
        </Form>
      </ModalBody>
    </Modal>
  );
}
