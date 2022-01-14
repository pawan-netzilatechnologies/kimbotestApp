import react from "react";
import {Container, Card, List} from "reactstrap";
import StepOne from "../forms/StepOne"
import StepTwo from "../forms/StepTwo"
import StepThree from "../forms/StepThree"
import StepFour from "../forms/StepFour"

export default function Multistep() {
return (
<Card className="multistep-section">
    <Container>
        <Card className="steps-bar">
          <List>
            <li className="active"><a href="#"><span>1</span>Business information</a></li>
            <li><a href="#"><span>2</span>Directors</a></li>
            <li><a href="#"><span>3</span>Shareholders</a></li>
            <li><a href="#"><span>4</span>Address</a></li>
          </List>

        </Card>
        <Card className="steps-block-main">
            <StepOne></StepOne>
            <StepTwo></StepTwo>
            <StepThree></StepThree>
            <StepFour></StepFour>
        </Card>    
    </Container>
</Card>
)

}