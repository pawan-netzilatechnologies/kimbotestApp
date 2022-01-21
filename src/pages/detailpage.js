import { useState } from "react";
import { Card, Container, List } from "reactstrap";
import Detail from "../components/detail/details";
import File from "../components/detail/files";
import Invite from "../components/detail/invite";
import Payment from "../components/detail/payments";
import Task from "../components/detail/tasks";

export default function DetailPage() {
  const [steps, setSteps] = useState(1);
  const handleSteps = (ev, stp) => {
    var dots = document.querySelectorAll("li");
    for (var n = 0; n < dots.length; ++n) {
      if (dots[n] !== this) {
        dots[n].className = "";
      }
    }
    ev.currentTarget.classList.add("active");
    setSteps(stp);
  };
  const renderFunction = (params) => {
    switch (params) {
      case 1:
        return <Detail />;
      case 2:
        return <Payment />;
      case 3:
        return <File />;
      case 4:
        return <Task />;
      case 5:
        return <Invite />;
      default:
        return <Detail />;
    }
  };
  return (
    <Card className="section-main">
      <Container>
        <Card className="detailpage-bar">
          <List>
            <li className="active" onClick={(ev) => handleSteps(ev, 1)}>
              <a href="#">Details</a>
            </li>
            <li onClick={(ev) => handleSteps(ev, 2)}>
              <a href="#">Payments</a>
            </li>
            <li onClick={(ev) => handleSteps(ev, 3)}>
              <a href="#">Files</a>
            </li>
            <li onClick={(ev) => handleSteps(ev, 4)}>
              <a href="#">Tasks</a>
            </li>
            <li onClick={(ev) => handleSteps(ev, 5)}>
              <a href="#">Invite</a>
            </li>
          </List>
        </Card>
        <Card className="detailpage-main">{renderFunction(steps)}</Card>
      </Container>
    </Card>
  );
}
