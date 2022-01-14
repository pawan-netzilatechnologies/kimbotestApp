import { useState } from "react";
import {Container, Card, List} from "reactstrap";
import StepOne from "../forms/StepOne"
import StepTwo from "../forms/StepTwo"
import StepThree from "../forms/StepThree"
import StepFour from "../forms/StepFour"

export default function Multistep() {
  const [steps, setSteps] = useState(1);
  const handleSteps = (ev, stp) => {
    var dots = document.querySelectorAll("li");
    for (var n = 0; n < dots.length; ++n) {
      if (dots[n] !== this) {
        dots[n].className = "";
      }
    }
    ev.currentTarget.classList.add('active');
    setSteps(stp)
  }
  const renderFunction = (params) => {
    switch(params){
      case 1:
        return <StepOne/>;
      case 2: 
        return <StepTwo />;
      case 3: 
        return <StepThree />;
      case 4:
        return <StepFour />;
      default:
        return <StepOne/>; 
    }
  }
return (
<Card className="multistep-section">
    <Container>
        <Card className="steps-bar">
          <List>
            <li className="active" onClick={(ev)=>handleSteps(ev, 1)}><a href="#"><span>1</span>Business information</a></li>
            <li onClick={(ev)=>handleSteps(ev, 2)}><a href="#" ><span>2</span>Directors</a></li>
            <li onClick={(ev)=>handleSteps(ev, 3)}><a href="#"><span>3</span>Shareholders</a></li>
            <li onClick={(ev)=>handleSteps(ev, 4)}><a href="#"><span>4</span>Address</a></li>
          </List>

        </Card>
        <Card className="steps-block-main">
          {renderFunction(steps)}
        </Card>    
    </Container>
</Card>
)

}