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
import icon1 from "../../images/step-icon-1.jpg";
import icon2 from "../../images/step-icon-2.jpg";
import icon3 from "../../images/step-icon-3.jpg";
import icon4 from "../../images/step-icon-4.jpg";

export default function StepOne({myform, setSteps, setMyForm}) {
  const [open, setOpen] = useState(false);
  const [checkBusiness, setCheckBusiness] = useState("existing");
  const [error, setError] = useState(false);
  const [activityError, setActivityError] = useState(false);
  const [uenError, setUenError] = useState(false);
  const handleInputChange = (ev, name) => {
    setMyForm({...myform , [name]: ev.target.value})
  }
  const showTooltip = () => {
    setOpen(!open);
  };
  const saveData = () => {
    var error =false;
    if(checkBusiness == 'existing'){
      if(myform.companyName == "") {
        setError(true)
        error = true;
      }
       if(myform.uen == "") {
        setUenError(true);
        error = true;
      }
       if(myform.componyActivity == "") {
        setActivityError(true);
        error = true;
      }
    }else{
      if(myform.companyName == "") {
        setError(true)
        error = true;
      }
      if(myform.componyActivity == "") {
        setActivityError(true);
        error = true;
      }
    }
    if(error == false) {
      setSteps(2)  
    }
  }
  const backStep = () => {
    setSteps(1)  
  }
  const selectValue = (ev, name) => {
    setCheckBusiness(name)
    var dots = document.getElementsByClassName("firstStep");
    for (var n = 0; n < dots.length; ++n) {
      if (dots[n] !== this) {
        dots[n].classList.remove("active")
      }
    }
    ev.currentTarget.classList.add("active");
  }
  const handleCheckName = () => {
    if(myform.companyName == "") {
      setError(true)
    }
  }
  const handleCorporate = (ev, value, name) =>{
    var dots = document.getElementsByClassName("secondStep");
    for (var n = 0; n < dots.length; ++n) {
      if (dots[n] !== this) {
        dots[n].classList.remove("active")
      }
    }
    ev.currentTarget.classList.add("active");
    setMyForm({...myform , [name]: value})
  }
  return (
    <Card className="steps-block">
      <Card className="section-title">
        <CardTitle tag="h2" className="text-center">
          <strong>Let us help you put the business together.</strong>
        </CardTitle>
        <CardText>Firstly is this an existing business?</CardText>
      </Card>
      <Row>
        <Col xs="6">
          <Card className="steps-detail-block firstStep active" onClick={(ev) => selectValue(ev, "existing")}>
            <img src={icon1} alt="" />
            <CardText>
              This is an existing <br />
              business already <br />
              incorporated elsewhere
            </CardText>
          </Card>
        </Col>
        <Col xs="6">
          <Card className="steps-detail-block firstStep" onClick={(ev) => selectValue(ev, "new")}>
            <img src={icon2} alt="" />
            <CardText>
              This is a new business <br />
              that is not yet <br />
              incorporated anywhere
            </CardText>
          </Card>
        </Col>
      </Row>
    {checkBusiness == "new" ? 
      <Card className="steps-form">
        <Card className="section-title">
          <CardTitle tag="h2">
            <strong>About your new business</strong>
          </CardTitle>
        </Card>
        <Form>
          <FormGroup>
            <div>
              <Input
                name=""
                placeholder="Company name - first choice"
                type="text"
                value={myform.companyName}
                onChange={(ev) => handleInputChange(ev, 'companyName')}
                invalid={error}
              />
              {error ? <p className="required-text">"It seems like it is available in Singapore", or "Please enter
              another name, it seems like it is not available in Singapore"</p> : ''}
            </div>
            <Button onClick={handleCheckName}>Check</Button>
            
          </FormGroup>
          
          <FormGroup>
            <Input id="exampleSelect" invalid={activityError} name="select" type="select" value={myform.componyActivity}  onChange={(ev) => handleInputChange(ev, 'componyActivity')}>
              <option value="SSIC - Company activity">SSIC - Company activity</option>
              <option value="SSIC - Company activity-1">SSIC - Company activity-1</option>
              <option value="SSIC - Company activity-2">SSIC - Company activity-2</option>
              <option value="SSIC - Company activity-3">SSIC - Company activity-3</option>
              <option value="SSIC - Company activity-4">SSIC - Company activity-4</option>
            </Input>
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
                The Singapore Standard Industrial Classification (SSIC) is the
                national standard for classifying economic activities undertaken
                by economic units and is used in censuses of population,
                household and establishment surveys and in administrative
                databases. The SSIC adopts the basic framework and principles of
                the International Standard Industrial Classification of All
                Economic Activities (ISIC). It is reviewed and updated regularly
                to reflect significant changes in the structure of the Singapore
                economy and the emergence of new activities as well as to align
                with changes in international standards.
              </Tooltip>
            </div>
          </FormGroup>

          <FormGroup className="step-from-btn">
            <Button onClick={backStep}>Back</Button>
            <Button onClick={saveData}>Save & Next</Button>
          </FormGroup>
        </Form>
      </Card>
      :
      <>
      <Card className="step-business-section">
        <Card className="section-title">
          <CardTitle tag="h2">
            <strong>About your existing business</strong>
          </CardTitle>
          <CardText>Is your business incorporated in Singapore?</CardText>
        </Card>
        <Row>
          <Col xs="6">
            <Card className="steps-detail-block secondStep active" onClick={(ev) => {handleCorporate(ev, true, 'incorporated')}}>
              <img src={icon3} alt=""/>
              <CardText>
                Yes, it is incorporated in <br />
                Singapore
              </CardText>
            </Card>
          </Col>
          <Col xs="6">
            <Card className="steps-detail-block secondStep" onClick={(ev) => {handleCorporate(ev, false, 'incorporated')}}>
              <img src={icon4} alt=""/>
              <CardText>
                No, it is not incorporated <br />
                in Singapore
              </CardText>
            </Card>
          </Col>
        </Row>
      </Card>
  
      <Card className="steps-form shareholder-form">
        <Card className="section-title">
          <CardTitle tag="h2">
            <strong>Information about your existing Singapore company</strong>
          </CardTitle>
        </Card>
        <Form>
          <FormGroup className="mob-full">  
              <div className="email-check">
                <div>
                  <Input name="" placeholder="UEN" type="text" invalid={uenError} value={myform.uen} onChange={(ev) => handleInputChange(ev, 'uen')}/>
                  {uenError ? <p className="required-text">UEN is required</p> : ''}
                </div>
              <Button onClick={handleCheckName}>Check</Button>
              </div>
            
            <div className="shareholder-fields"> 
              <Input name="" placeholder="Company name" invalid={error} type="text" value={myform.companyName} onChange={(ev) => handleInputChange(ev, 'companyName')}/>
              {error ? <p className="required-text">"It seems like it is available in Singapore", or "Please enter
              another name, it seems like it is not available in Singapore"</p> :''}
            </div>
          </FormGroup>

          <FormGroup>
            <Input id="exampleSelect" name="select" invalid={activityError} type="select" value={myform.componyActivity} onChange={(ev) => handleInputChange(ev, 'componyActivity')}>
              <option>SSIC - Company activity</option>
              <option>SSIC - Company activity-1</option>
              <option>SSIC - Company activity-2</option>
              <option>SSIC - Company activity-3</option>
              <option>SSIC - Company activity-4</option>
            </Input>
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
                The Singapore Standard Industrial Classification (SSIC) is the
                national standard for classifying economic activities undertaken
                by economic units and is used in censuses of population,
                household and establishment surveys and in administrative
                databases. The SSIC adopts the basic framework and principles of
                the International Standard Industrial Classification of All
                Economic Activities (ISIC). It is reviewed and updated regularly
                to reflect significant changes in the structure of the Singapore
                economy and the emergence of new activities as well as to align
                with changes in international standards.
              </Tooltip>
            </div>
          </FormGroup>

          <FormGroup className="step-from-btn">
            <Button onClick={backStep}>Back</Button>
            <Button onClick={saveData}>Save & Next</Button>
          </FormGroup>
        </Form>
      </Card>
      </>
}
    </Card>
  );
}
