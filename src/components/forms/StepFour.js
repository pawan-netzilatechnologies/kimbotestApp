import react from "react";
import { Card, CardTitle, CardText, Form, FormGroup, Button, Row, Col, List, Label, Input} from "reactstrap";


export default function StepFour () {
return(

<Card className="steps-block">
  <Card className="steps-form">
      <Card className="section-title"> 
                <CardTitle tag="h2" className="text-center title-with-tooltip">
                <strong>kimbocorp will utilise our address for your business when<br/>
                  incorporated. We will scan your mails, upload them to your<br/>
                  account and forward them to your email.</strong> 
                </CardTitle>
                <CardText>
                You can contact us to change this anytime later
                </CardText>  
      </Card>      
      <Card className="step-address-text">
      <CardText>
      151 Chin Swee Road Manhattan House 02-24 Singapore 169876
      </CardText>  
      <hr/>
      <CardText>
      Using this Address is mandatory. You can change it later anytime
      </CardText>  
      </Card>
             
                      
                              <Form>
                                       
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


            <Card className="steps-form">
      <Card className="section-title"> 
                <CardTitle tag="h2" className="text-center">
                <strong>Congratulations you can incorporate your business immediately by selecting<br/>
                  the monthly or discounted yearly plan</strong> 
                </CardTitle>
               
      </Card>      
      <Row>
            <Col xs="4">
                  <Card className="business-information bi-block">
                  <List type="unstyled">
                  <li>1.Business information
                        <ul>
                              <li>a.new or existing business</li>
                              <li>b.company name</li>
                              <li>c.SSIC</li>
                        </ul>

                  </li>
                  <li>2.Shareholders
                        <ul>
                              <li>a.UBO</li>
                              <li>b.other shareholders</li>
                              <li>name and contact information</li>
                        </ul>
                  </li>
                  <li>3.Directors
                       <ul>
                             <li>a.foreigner / Singaporean or PR</li>
                             <li>b.other or only director</li>
                             <li>c.Name and contact information</li>
                       </ul>
                  </li>
                  <li>4.Address
                       <ul>
                             <li>a.151 chin swee road manhattan house
                              02-24 Singapore 169887</li>
                       </ul>
                  </li>
                  </List>

                  </Card>
            </Col>
            <Col xs="4">
                  <Card className="monthly-yearly-tabs bi-block">
                        <Card className="tabs-links">
                              <a href="#" className="tab-active">Monthly</a>
                              <a href="#">Yearly</a>
                        </Card>
                        <Card className="tabs-detail">
                              <CardTitle tag="h4" className="text-center">
                              <strong>Exempt</strong>
                              </CardTitle>
                              <CardText className="text-center">
                              Execute your business plan and receive revenues into adigital bank account.
                              </CardText>  
                              <CardTitle tag="h4" className="text-center">
                              USD 329
                              </CardTitle>
                              <CardText className="text-center">
                              per month
                              </CardText>  
                              <List>
                                    <li>Mandatory corporate secretary and nominee director appointments</li>
                                    <li>Everything in Dormant</li>
                                    <li>Resolutions to cover change of financial year, registered address, business activities</li>
                                    <li>30-min strategy sessions every other week</li>
                                    <li>Bank account (WISE or ASPIRE)</li>
                                    <li>Hassle-free compliance, including AR and AGM</li>
                                    <li>All business incorporation certificates and constitutions</li>
                                    <li>Dedicated dashboard to post queries and wishlists where we will respond within 24hrs</li>
                              </List>
                        </Card>

                  </Card>
                  
            </Col>
            <Col xs="4">
                  <Card className="checkout-form bi-block">
                             <CardTitle tag="h5">
                              <strong>Pay with Card</strong>
                              </CardTitle>
                              <Form>
                                    <Label >
                                          Contact information
                                    </Label>
                                       <FormGroup>
                                       <Input
                                                      name=""
                                                      placeholder="email@example.com"
                                                      type="email"
                                                      className="checkout-email"
                                                />     
                                           <Input
                                                      name=""
                                                      placeholder="8123 4567"
                                                      type="text"
                                                      className="checkout-cardname"
                                                />           
                                       </FormGroup> 
                                       
                                      

                                       <Label >
                                          Contact information
                                    </Label>
                                       <FormGroup>
                                       <Input
                                                      name=""
                                                      placeholder="1234 1234 1234 1234"
                                                      type="text"
                                                      className="checkout-cardno"
                                                /> 
                                                <div className="checkout-date-cvc">    
                                                <Input
                                                      id="exampleDate"
                                                      name="date"
                                                      placeholder="date placeholder"
                                                      type="date"
                                                      className="checkout-date"
                                                />
                                                 <Input
                                                      name=""
                                                      placeholder="CVC"
                                                      type="text"
                                                      className="checkout-cardcvc"
                                                /> 
                                                </div>          
                                       </FormGroup>

                                             <Label >
                                          Name on Card
                                    </Label>
                                       <FormGroup>
                                       <Input
                                                      name=""
                                                      type="text"
                                                      className="checkout-namecard"
                                                />     
                                                
                                       </FormGroup> 

                                             <Label >
                                          Billing address
                                    </Label>
                                       <FormGroup>
                                       <Input
                                                id="exampleSelect"
                                                name="select"
                                                type="select"
                                          >
                                                <option>
                                                Singapore
                                                </option>
                                                <option>
                                                Singapore
                                                </option>
                                                <option>
                                                Singapore
                                                </option>
                                                <option>
                                                Singapore
                                                </option>
                                                <option>
                                                Singapore
                                                </option>
                                          </Input>   
                                           <Input
                                                      name=""
                                                      placeholder="Address"
                                                      type="text"
                                                      className="checkout-address"
                                                />          
                                                
                                       </FormGroup>  
                                       <a href="#" className="address-manually">Enter address manually</a> 
                                       <FormGroup check>
                                          <Input type="checkbox" />
                                          <Label check>
                                          <strong>Save my info for secure 1-click checkout</strong><br/>
                                          Pay faster on kimbo Corporate Pte Ltd and thousands of sites.
                                          </Label>
                                    </FormGroup>
                                       <FormGroup className="subscribe-btn">
                                       <Button>
                                       Subscribe
                                       </Button>
                                       </FormGroup>
                     </Form>   
                  </Card>
                  
            </Col>

      </Row>
             
                      
      

            </Card>
</Card>

)
}