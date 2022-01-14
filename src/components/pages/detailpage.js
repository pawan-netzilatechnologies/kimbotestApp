import { useState } from "react";
import { Card, Container, List } from "reactstrap";
import Detail from "../detail/details";
import File from "../detail/files";
import Invite from "../detail/invite";
import Payment from "../detail/payments";
import Task from "../detail/tasks";

export default function DetailPage(){
  const [steps, setSteps] = useState(1);
  const handleSteps = (ev, stp) => {
    var dots = document.querySelectorAll("a");
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
            return <Detail />;
          case 2: 
            return <Payment />;
          case 3: 
            return <File />;
          case 4:
            return <Invite />;
          case 4:
            return <Task />;  
          default:
            return <Detail/>; 
        }
      }
return(
    <Card className="section-main">
        <Container>
            <Card className="detailpage-bar">
                <List>
                    <li><a href="#" className="active" onClick={(ev)=>handleSteps(ev, 1)}>Details</a></li>
                    <li><a href="#" onClick={(ev)=>handleSteps(ev, 2)}>Payments</a></li>
                    <li><a href="#" onClick={(ev)=>handleSteps(ev, 3)}>Files</a></li>
                    <li><a href="#" onClick={(ev)=>handleSteps(ev, 4)}>Tasks</a></li>
                    <li><a href="#" onClick={(ev)=>handleSteps(ev, 5)}>Invite</a></li>
                </List>
            </Card>
            <Card className="detailpage-main">
                {renderFunction(steps)}
            </Card>
        </Container>
    </Card>
)
}