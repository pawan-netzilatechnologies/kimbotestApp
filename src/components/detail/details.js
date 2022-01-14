import react from "react";
import { Card, CardText, CardTitle, Col, Form, FormGroup, List, Row, Input, Table } from "reactstrap";
import member1 from "../../images/member1.png";
import member2 from "../../images/member2.png";
import member3 from "../../images/member3.png";
import shareicon from "../../images/share-icon.png";
import locationicon from "../../images/location-icon.png"

export default function Detail() {
return(

    <Row>
        <Col xs="8">
          <Card className="detail-business-block">
          <Card className="detail-business-header">
          <CardTitle tag="h3">Business Name</CardTitle>
          <a href="#">Edit</a>
          </Card>
         
            <List>
               <li><h4>Company ABC</h4><p>Formally known as Company XYZ</p></li>
            </List>
         </Card>

         <Card className="detail-business-block detail-business-acitivity">
          <Card className="detail-business-header">
          <CardTitle tag="h3">Business Activity</CardTitle>
          <a href="#">Edit</a>
          </Card>
         
            <Form>
              <FormGroup>
              <Input
                    id="exampleSelect"
                    name="select"
                    type="select"
            >
                    <option>
                    Primary Activity
                    </option>
                    <option>
                    Primary activity-1
                    </option>
                    <option>
                    Primary activity-2
                    </option>
                    <option>
                    Primary activity-3
                    </option>
                    <option>
                    Primary activity-4
                    </option>
            </Input>
            <Input
                    id="exampleSelect"
                    name="select"
                    type="select"
            >
                    <option>
                    Secondary Activity
                    </option>
                    <option>
                    Secondary activity-1
                    </option>
                    <option>
                    Secondary activity-2
                    </option>
                    <option>
                    Secondary activity-3
                    </option>
                    <option>
                    Secondary activity-4
                    </option>
            </Input>

              </FormGroup>

            </Form>
         </Card>

         <Card className="detail-business-block shareholders-block">
          <Card className="detail-business-header">
          <CardTitle tag="h3">Shareholders Name</CardTitle>
          <a href="#">Add</a>
          </Card>
         
          <Table responsive>
                <thead>
                    <tr>
                    <th className="text-center">
                    Name
                    </th>
                    <th className="text-center">
                    Ordinary number / Currency
                    </th>
                    <th className="text-center">
                    Date of appointment
                    </th>
                    <th>
                    Actions
                    </th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="text-center">
                    First Name Last Name
                    </td>
                    <td className="text-center">
                    100 / USD
                    </td>
                    <td className="text-center">
                    2021-04-15
                    </td>
                    <td>
                        <a href="#">Edit</a>
                        <a href="#">Resign</a>
                    </td>
                    </tr>
                
                
                </tbody>
           </Table>
         </Card>

         <Card className="detail-business-block shareholders-block">
          <Card className="detail-business-header">
          <CardTitle tag="h3">Officers / Authorised Representatives</CardTitle>
          <a href="#">Add</a>
          </Card>
         
          <Table responsive>
                <thead>
                    <tr>
                    <th className="text-center">
                    Name
                    </th>
                    <th className="text-center">
                    Ordinary number / Currency
                    </th>
                    <th className="text-center">
                    Date of appointment
                    </th>
                    <th>
                    Actions
                    </th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="text-center">
                    First Name Last Name
                    </td>
                    <td className="text-center">
                    Singapore / Director
                    </td>
                    <td className="text-center">
                    2021-12-01
                    </td>
                    <td>
                        <a href="#">Edit</a>
                        <a href="#">Resign</a>
                    </td>
                    </tr>
                
                
                </tbody>
           </Table>
         </Card>

        </Col>
        <Col xs="4">
<Card className="sidebar-block">
<List>
<li>
    <h4>Ultimate beneficial owner</h4>
    <span><img src={ member1 }/></span>
</li>
<li>
    <h4>Ultimate beneficial owner</h4>
    <span><img src={ member1 }/><img src={ member2 }/><img src={ member3 }/></span>
</li>

</List>

</Card>

<Card className="sidebar-block text-center">
<CardTitle tag="h3">Increase share capital</CardTitle>
<img src={shareicon}/>
<CardText>
Share capital consists of all funds raised by a company in
exchange for common or preferred shares of stock. A company
that wishes to raise more equity can issue and sell additional
shares, thereby increasing its share capital.
</CardText>
<a href="#">Increase share capital</a>
</Card>

<Card className="sidebar-block text-center">
<CardTitle tag="h3">Change registered address</CardTitle>
<img src={ locationicon }/>
<CardText>
You can change your business's registered address here. Must
be an address in Singapore and cannot be a PO.Box number.
</CardText>
<a href="#">Change registered address</a>
</Card>
            
        </Col>
    </Row>


)
}