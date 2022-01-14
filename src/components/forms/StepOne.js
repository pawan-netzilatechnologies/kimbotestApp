import react, { useState } from "react";
import { Card, CardTitle, CardText, Row, Col, Form, FormGroup, Input, Button, Tooltip} from "reactstrap";
import icon1 from "../../images/step-icon-1.jpg";
import icon2 from "../../images/step-icon-2.jpg";
import icon3 from "../../images/step-icon-3.jpg";
import icon4 from "../../images/step-icon-4.jpg";


export default function StepOne () {
      const [open, setOpen] = useState(false);
      const showTooltip = () =>{
          setOpen(!open);
      }
return(

<Card className="steps-block">
     <Card className="section-title">
                <CardTitle tag="h2" className="text-center">
                <strong>Let us help you put the business together.</strong>
                </CardTitle>
                <CardText>
                Firstly is this an existing business?
                </CardText>  
      </Card>   
      <Row>
            <Col xs="6">
                  <Card className="steps-detail-block">
                        <img src={ icon1 }/>
                        <CardText>
                        This is an existing <br/>business already <br/>incorporated elsewhere
                        </CardText>  
                  </Card>
            </Col>
            <Col xs="6">
                  <Card className="steps-detail-block">
                        <img src={ icon2 }/>
                        <CardText>
                        This is a new business <br/>that is not yet <br/>incorporated anywhere
                        </CardText>  
                  </Card> 
            </Col>      
      </Row>  

      <Card className="steps-form">
      <Card className="section-title">
                <CardTitle tag="h2" >
                <strong>About your new business</strong>
                </CardTitle>
      </Card>           
                  <Form>
                                    <FormGroup>
                                    
                                    <Input
                                          name=""
                                          placeholder="Company name - first choice"
                                          type="text"
                                    />
                                    <Button>
                                    Check
                                    </Button>
                                    </FormGroup>

                                    <FormGroup>
                                    <Input
                                          id="exampleSelect"
                                          name="select"
                                          type="select"
                                    >
                                          <option>
                                          SSIC - Company activity
                                          </option>
                                          <option>
                                          SSIC - Company activity-1
                                          </option>
                                          <option>
                                          SSIC - Company activity-2
                                          </option>
                                          <option>
                                          SSIC - Company activity-3
                                          </option>
                                          <option>
                                          SSIC - Company activity-4
                                          </option>
                                    </Input>
                                          <div>
                                          <a
                                                href="#"
                                                id="TooltipExample"
                                                className="form-tooltip"
                                                onMouseOver={showTooltip}
                                          >
                                          !
                                          </a>
                                          
                                          <Tooltip
                                          flip
                                          placement="right"
                                          target="TooltipExample"
                                          isOpen={open}
                                          >
                                          The Singapore Standard Industrial
                                    Classification (SSIC) is the national
                                    standard for classifying economic
                                    activities undertaken by economic
                                    units and is used in censuses of
                                    population, household and
                                    establishment surveys and in
                                    administrative databases. The
                                    SSIC adopts the basic framework
                                    and principles of the International
                                    Standard Industrial Classification
                                    of All Economic Activities (ISIC). It
                                    is reviewed and updated regularly
                                    to reflect significant changes in
                                    the structure of the Singapore
                                    economy and the emergence of
                                    new activities as well as to align
                                    with changes in international
                                    standards.
                                          </Tooltip>
                                          </div>
                                    </FormGroup>
                                    
                                    
                                    
                                    <FormGroup className="step-from-btn">
                                    <Button>
                                    Back
                                    </Button>
                                    <Button>
                                    Save & Next
                                    </Button>
                                    </FormGroup>
                  </Form> 
      

      </Card> 
            <Card className="step-business-section">
                  <Card className="section-title">
                              <CardTitle tag="h2" >
                              <strong>About your existing business</strong>
                              </CardTitle>
                              <CardText>
                              Is your business incorporated in Singapore?
                              </CardText>  
                        </Card>   
                        <Row>
                              <Col xs="6">
                                    <Card className="steps-detail-block">
                                          <img src={ icon3 }/>
                                          <CardText>
                                          Yes, it is incorporated in <br/>Singapore
                                          </CardText>  
                                    </Card>
                              </Col>
                              <Col xs="6">
                                    <Card className="steps-detail-block">
                                          <img src={ icon4 }/>
                                          <CardText>
                                          No, it is not incorporated <br/>in Singapore
                                          </CardText>  
                                    </Card> 
                              </Col>      
                        </Row>
            </Card>


            <Card className="steps-form">
      <Card className="section-title">
                <CardTitle tag="h2" >
                <strong>About your new business</strong>
                </CardTitle>
      </Card>           
                  <Form>
                                    <FormGroup>
                                    
                                    <Input
                                          name=""
                                          placeholder="UEN"
                                          type="text"
                                    />
                                    <Button>
                                    Check
                                    </Button>
                                    <Input
                                          name=""
                                          placeholder="Company name"
                                          type="text"
                                    />
                                    </FormGroup>

                                    <FormGroup>
                                    <Input
                                          id="exampleSelect"
                                          name="select"
                                          type="select"
                                    >
                                          <option>
                                          SSIC - Company activity
                                          </option>
                                          <option>
                                          SSIC - Company activity-1
                                          </option>
                                          <option>
                                          SSIC - Company activity-2
                                          </option>
                                          <option>
                                          SSIC - Company activity-3
                                          </option>
                                          <option>
                                          SSIC - Company activity-4
                                          </option>
                                    </Input>
                                          <div>
                                          <a
                                                href="#"
                                                id="TooltipExample"
                                                className="form-tooltip"
                                                onMouseOver={showTooltip}
                                          >
                                          !
                                          </a>
                                          
                                          <Tooltip
                                          flip
                                          placement="right"
                                          target="TooltipExample"
                                          isOpen={open}
                                          >
                                          The Singapore Standard Industrial
                                          Classification (SSIC) is the national
                                          standard for classifying economic
                                          activities undertaken by economic
                                          units and is used in censuses of
                                          population, household and
                                          establishment surveys and in
                                          administrative databases. The
                                          SSIC adopts the basic framework
                                          and principles of the International
                                          Standard Industrial Classification
                                          of All Economic Activities (ISIC). It
                                          is reviewed and updated regularly
                                          to reflect significant changes in
                                          the structure of the Singapore
                                          economy and the emergence of
                                          new activities as well as to align
                                          with changes in international
                                          standards.
                                          </Tooltip>
                                          </div>
                                    </FormGroup>
                                    
                                    
                                    
                                    <FormGroup className="step-from-btn">
                                    <Button>
                                    Back
                                    </Button>
                                    <Button>
                                    Save & Next
                                    </Button>
                                    </FormGroup>
                  </Form> 
      

      </Card> 

</Card>

)
}