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
import Forms from './Form'
import Image from "../../components/Image";
export default function StepTwo({myform, setSteps, setMyForm}) {
  const [open, setOpen] = useState(false);
  const showTooltip = () => {
    setOpen(!open);
  };
  const nextStep = () => {
    setSteps(3)  
  }
  const backStep = () => {
    setSteps(1)  
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
            Are you the ultimate beneficial owner of this business?
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
          Ultimate beneficial owner is a person who owns more than 25% of the
          business.
        </CardText>
      </Card>
      <Row>
        <Col xs="6">
          <Card className="steps-detail-block firstStep active" onClick={(ev) => handleOwnerChange(ev, true, 'beneficialOwner')}>
            <Image src={icon3} alt="" />
            <CardText>
              Yes, I am the ultimate
              <br />
              beneficial owner of this
              <br />
              business
            </CardText>
          </Card>
        </Col>
        <Col xs="6">
          <Card className="steps-detail-block firstStep" onClick={(ev) => handleOwnerChange(ev, false, 'beneficialOwner')}>
            <Image src={icon4} alt=""/>
            <CardText>
              No, I am not the
              <br />
              ultimate beneficial
              <br />
              owner of this business
            </CardText>
          </Card>
        </Col>
      </Row>

      <Card className="step-business-section">
        <Card className="section-title ">
          <CardTitle tag="h2" className="title-with-tooltip">
            <strong>Do you have other shareholders in this business?</strong>
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
            <Card className="steps-detail-block secondStep active" onClick={(ev) => handleShareChange(ev, true, 'shareholders')}>
              <Image src={icon3} alt="" />
              <CardText>
                Yes, there are other
                <br />
                shareholders in this
                <br />
                business.
              </CardText>
            </Card>
          </Col>
          <Col xs="6">
            <Card className="steps-detail-block secondStep" onClick={(ev) => handleShareChange(ev, false, 'shareholders')}>
              <Image src={icon4} alt="" />
              <CardText>
                No, I am the only
                <br />
                shareholder in this
                <br />
                business.
              </CardText>
            </Card>
          </Col>
        </Row>
      </Card>

      <Card className="steps-form shareholder-form">
        <Card className="section-title">
          <CardTitle tag="h2">
            <strong>Information about other shareholder</strong>
          </CardTitle>
        </Card>
          <Forms 
            shareholderAr='shareholderAr'
            firstName={myform.firstName} 
            lastName={myform.lastName} 
            email={myform.email}
            mobilenumber={myform.mobilenumber}
            nationality={myform.nationality}
            Name1='firstName' 
            Name2='lastName'
            Name3='email'
            Name4='mobilenumber'
            Name5='nationality'
            setMyForm={setMyForm}
            myform={myform}
            backStep={backStep}
            nextStep={nextStep}
          />
      </Card>
    </Card>
  );
}
