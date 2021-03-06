import { useState } from "react";
import {
  Card,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Button,
  Input,
} from "reactstrap";
import axios from "axios";
import PaymentForm from "./PaymentForm";
export default function StepFour({myform, setSteps, setMyForm}) {
  const [addressError, setAddressError] = useState(false);
  const [addressValid, setAddressValid] = useState(false);
  const [shopPayment, setShowPayment] = useState(false);
  
  const saveData = () => {
    if(addressValid){
      console.log(myform);
      localStorage.setItem('buisness', JSON.stringify(myform));
      axios.post('/saveAlldata', {'form': myform}).then((response)=>{
        console.log(response);
      })
      setShowPayment(true);
      setSteps(4)  
    }
  }
  const backStep = () =>{
    setSteps(3)  
  }
  const handleInputChange = (ev, name) => {
    if(name === "address"){
      if(ev.target.value === ""){
        setAddressError(true)
        setAddressValid(false)
      }else{
        setAddressError(false)
        setAddressValid(true)
      }
    }
    setMyForm({...myform , [name]: ev.target.value})
  }

  return (
    <Card className="steps-block">
      {shopPayment === false ?
      <Card className="steps-form">
        <Card className="section-title">
          <CardTitle tag="h2" className="text-center title-with-tooltip">
            <strong>
              kimbocorp will utilise our address for your business when
              <br />
              incorporated. We will scan your mails, upload them to your
              <br />
              account and forward them to your email.
            </strong>
          </CardTitle>
          <CardText>You can contact us to change this anytime later</CardText>
        </Card>
        <Form className="four-step-address">
          <FormGroup>
            <div className="shareholder-fields" >
              <Input name="" valid={addressValid} invalid={addressError} placeholder="151 Chin Swee Road Manhattan House 02-24 Singapore 169876" type="text" onChange={(ev) => handleInputChange(ev, 'address')} />
              {addressError ? <p className="required-text">Using this Address is mandatory. You can change it later anytime</p> : ''}
            </div>
          </FormGroup>
        
          <FormGroup className="step-from-btn">
            <Button className="step-last-back" onClick={backStep}>Back</Button>
            <Button onClick={saveData}>Save & Next</Button>
          </FormGroup>
        </Form>
      </Card>
  :
      <PaymentForm myform={myform} />
    }
    </Card>
  );
}
