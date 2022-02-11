import { useState } from "react";
import {
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
  Tooltip,
} from "reactstrap";
import icon3 from "../../images/step-icon-3.jpg";
import icon4 from "../../images/step-icon-4.jpg";
import icon5 from "../../images/step-icon-5.jpg";
import Forms from './Form';
import Image from "../../components/Image";
export default function StepThree({myform, setSteps, setMyForm}) {
  const [open, setOpen] = useState(false);
  console.log(myform);
  const showTooltip = () => {
    setOpen(!open);
  };
  const nextStep = () => {
    setSteps(4)  
  }
  const backStep = () => {
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
            <Image src={icon3} alt=""/>
            <CardText>I am a Singaporean/PR</CardText>
          </Card>
        </Col>
        <Col xs="6">
          <Card className="steps-detail-block firstStep" onClick={(ev) => handleOwnerChange(ev, false, 'permanentResident')}>
            <Image src={icon5} alt=""/>
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
              <Image src={icon3} alt=""/>
              <CardText>
                Yes, there are other
                <br />
                directors in the business.
              </CardText>
            </Card>
          </Col>
          <Col xs="6">
            <Card className="steps-detail-block secondStep" onClick={(ev) => handleShareChange(ev, false, 'directors')}>
              <Image src={icon4} alt=""/>
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
        <Forms 
            firstName={myform.directrfirstName} 
            lastName={myform.directrlastName} 
            email={myform.directremail}
            mobilenumber={myform.directrmobilenumber}
            nationality={myform.directrnationality}
            Name1='directrfirstName' 
            Name2='directrlastName'
            Name3='directremail'
            Name4='directrmobilenumber'
            Name5='directrnationality'
            setMyForm={setMyForm}
            myform={myform}
            backStep={backStep}
            nextStep={nextStep}
            shareholderAr='directorAr'
          />
      </Card>
    </Card>
  );
}
