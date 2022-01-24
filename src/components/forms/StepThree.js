import react, { useState } from "react";
import {
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Tooltip,
} from "reactstrap";
import icon3 from "../../images/step-icon-3.jpg";
import icon4 from "../../images/step-icon-4.jpg";
import icon5 from "../../images/step-icon-5.jpg";

export default function StepThree({myform, setSteps, setMyForm}) {
  const [open, setOpen] = useState(false);
  const [firstError, setFirstError] = useState(false);
  const [lastError, setLastError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobError, setMobError] = useState(false);
  const [nationError, setNationError] = useState(false);
  const showTooltip = () => {
    setOpen(!open);
  };
  const saveData = () => {
    setFirstError(false)
    setLastError(false);
    setEmailError(false)
    setMobError(false)
    setNationError(false)
    var error = false;
    if(myform.directrfirstName == ""){
      setFirstError(true)
      error= true;
    } 
    if(myform.directrlastName == "" ){
      setLastError(true)
      error= true;
    } 
    if(myform.directremail == ""){
      setEmailError(true)
      error= true;
    }
    if(myform.directrmobilenumber ==""){
      setMobError(true)
      error= true;
    } 
    if(myform.directrnationality == ""){
      setNationError(true)
      error= true;
    }
    if(error == false){
      setSteps(4)
    }
  }
  const backStep = () =>{
    setSteps(2)  
  }
  const handleOwnerChange = (ev, value, name) => {
    var dots = document.getElementsByClassName("firstStep");
    for (var n = 0; n < dots.length; ++n) {
      if (dots[n] !== this) {
        dots[n].classList.remove("active")
      }
    }
    ev.currentTarget.classList.add("active");
    setMyForm({...myform , [name]: value})
  }
  const handleShareChange = (ev, value, name) => {
    var dots = document.getElementsByClassName("secondStep");
    for (var n = 0; n < dots.length; ++n) {
      if (dots[n] !== this) {
        dots[n].classList.remove("active")
      }
    }
    ev.currentTarget.classList.add("active");
    setMyForm({...myform , [name]: value})
  }
  const handleInputChange = (ev, name) => {
    setMyForm({...myform , [name]: ev.target.value})
  }
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const handleCheckEmail = () => {
    console.log(validateEmail(myform.email));
    if(myform.email == ""){
      setEmailError(true)
      return false;
    }else if(!validateEmail(myform.email)){
      console.log("erro");
      setEmailError(true)
      return false; 
    }else{
      setEmailError(false)
    }
  }
  return (
    <Card className="steps-block">
      <Card className="section-title">
        <CardTitle tag="h2" className="text-center title-with-tooltip">
          <strong>
            Every business in Singapore needs to appoint a resident director.
          </strong>
          <div>
            <span
              id="TooltipExample"
              className="form-tooltip"
              onMouseOver={showTooltip}
            >
              !
            </span>

            <Tooltip
              flip
              placement="right"
              target="TooltipExample"
              isOpen={open}
            >
              A shareholder owns a share in the business in exchange for his
              financial or technical contribution towards the business. A share
              is a portion of the business.
              <br />A shareholder may be an individual, a company or a limited
              liability partnership. By allocating shares to any of the
              aforementioned, the person or entity become partial owner of the
              business.
            </Tooltip>
          </div>
        </CardTitle>
        <CardText>
          Are you a foreigner or Singaporean/Singaporean Permanent Resident?
        </CardText>
      </Card>
      <Row>
        <Col xs="6">
          <Card className="steps-detail-block firstStep active" onClick={(ev) => handleOwnerChange(ev, true, 'permanentResident')}>
            <img src={icon3} alt=""/>
            <CardText>I am a Singaporean/PR</CardText>
          </Card>
        </Col>
        <Col xs="6">
          <Card className="steps-detail-block firstStep" onClick={(ev) => handleOwnerChange(ev, false, 'permanentResident')}>
            <img src={icon5} alt=""/>
            <CardText>I am a foreigner</CardText>
          </Card>
        </Col>
      </Row>

      <Card className="step-business-section">
        <Card className="section-title ">
          <CardTitle tag="h2" className="title-with-tooltip">
            <strong>
              Besides yourself, do you have other persons who can be appointed
              as directors?
            </strong>
            <div>
              <span
                id="TooltipExample"
                className="form-tooltip"
                onMouseOver={showTooltip}
              >
                !
              </span>

              <Tooltip
                flip
                placement="right"
                target="TooltipExample"
                isOpen={open}
              >
                A shareholder owns a share in the business in exchange for his
                financial or technical contribution towards the business. A
                share is a portion of the business.
                <br />A shareholder may be an individual, a company or a limited
                liability partnership. By allocating shares to any of the
                aforementioned, the person or entity become partial owner of the
                business.
              </Tooltip>
            </div>
          </CardTitle>
        </Card>
        <Row>
          <Col xs="6">
            <Card className="steps-detail-block secondStep active" onClick={(ev) => handleShareChange(ev, true, 'directors')}>
              <img src={icon3} alt=""/>
              <CardText>
                Yes, there are other
                <br />
                directors in the business.
              </CardText>
            </Card>
          </Col>
          <Col xs="6">
            <Card className="steps-detail-block secondStep" onClick={(ev) => handleShareChange(ev, false, 'directors')}>
              <img src={icon4} alt=""/>
              <CardText>
                No, I am the only
                <br />
                director in this business.
              </CardText>
            </Card>
          </Col>
        </Row>
      </Card>

      <Card className="steps-form shareholder-form">
        <Card className="section-title">
          <CardTitle tag="h2">
            <strong>Information about other director</strong>
          </CardTitle>
        </Card>
        <Form>
          <FormGroup className="mob-full">
            <div className="shareholder-fields">
              <Input name="" value={myform.directrfirstName} invalid={firstError} onChange={(ev) => handleInputChange(ev, 'directrfirstName')} placeholder="First Name" type="text" />
              <p className="required-text">First name is required</p>
            </div>
            <div className="shareholder-fields">
              <Input name=""  value={myform.directrlastName} invalid={lastError} onChange={(ev) => handleInputChange(ev, 'directrlastName')} placeholder="Last name" type="text" />
              <p className="required-text">Last name is required</p>            
            </div> 
          </FormGroup>
          <FormGroup className="mob-full">
            <div className="email-check">
              <div>
                <Input name="" value={myform.directremail} invalid={emailError} placeholder="Email address" type="email"  onChange={(ev) => handleInputChange(ev, 'directremail')}/>
                <p className="required-text">Email seems to be valid</p> 
              </div>
              <Button onClick={handleCheckEmail}>Check</Button>
            </div>
            <div className="shareholder-fields">
              <Input name="" value={myform.directrmobilenumber} invalid={mobError} placeholder="Mobile number" type="text" onChange={(ev) => handleInputChange(ev, 'directrmobilenumber')}/>
              <p className="required-text">Mobile number is required</p>    
            </div>
          </FormGroup>
          <FormGroup className="mob-full">
            <div className="shareholder-fields">
              <Input name="" value={myform.directrnationality}  invalid={nationError} placeholder="Nationality" type="text" onChange={(ev) => handleInputChange(ev, 'directrnationality')}/>
              <p className="required-text">Nationality is required</p>
            </div>
            <div className="add-another">
              <Button>Add another</Button>
            </div>
          </FormGroup>

          <FormGroup className="step-from-btn">
            <Button onClick={backStep}>Back</Button>
            <Button onClick={saveData}>Save & Next</Button>
          </FormGroup>
        </Form>
      </Card>
    </Card>
  );
}
