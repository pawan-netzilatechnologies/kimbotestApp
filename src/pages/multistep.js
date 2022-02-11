import { useEffect, useState } from "react";
import { Container, Card, List } from "reactstrap";
import StepOne from "../components/forms/StepOne";
import StepTwo from "../components/forms/StepTwo";
import StepThree from "../components/forms/StepThree";
import StepFour from "../components/forms/StepFour";

export default function Multistep() {
  const [steps, setSteps] = useState(1);
  const [list, setList] = useState([]);
  const [myform, setMyForm] = useState({
    companyName: '',
    componyActivity: '',
    incorporated: true,
    uen: '',
    beneficialOwner: true,
    shareholders : true,
    firstName: '',
    lastName: '',
    email: '',
    mobilenumber: '',
    nationality: '',
    permanentResident: true,
    directors: true,
    directrfirstName: '',
    directrlastName: '',
    directremail: '',
    directrmobilenumber: '',
    directrnationality: '',
    address: '',
    shareholderAr: [],
    directorAr: []
  })
 useEffect(()=>{
  const lists = [
    "Business information",
    "Directors",
    "Shareholders",
    "Address",
  ];
  setList(lists);
 },[])
  const handleSteps = (ev, stp) => {
    if(steps > stp) {
      setSteps(stp);
    }
  };
  function activeSteps (stp) {
    var dots = document.getElementsByClassName("allSteps");
    for (var n = 0; n < dots.length; ++n) {
      if (n < stp) {
        dots[n].classList.add("active");
      }else{
        dots[n].classList.remove("active");
      }
    }
  }
  const renderFunction = (params) => {
    activeSteps(steps);
    switch (params) {
      case 1:
        return <StepOne setMyForm={setMyForm} myform={myform} setSteps={setSteps} />;
      case 2:
        return <StepTwo setMyForm={setMyForm} myform={myform} setSteps={setSteps} />;
      case 3:
        return <StepThree setMyForm={setMyForm} myform={myform} setSteps={setSteps} />;
      case 4:
        return <StepFour setMyForm={setMyForm} myform={myform} setSteps={setSteps} />;
      default:
        return <StepOne setMyForm={setMyForm} myform={myform} setSteps={setSteps} />;
    }
  };
  const renderData = (list) => {
    return list.map((value, i) => {
      return( 
        <li className={`allSteps ${ i ===0 ? "active" : ''}`} onClick={(ev) => handleSteps(ev, i+1)} key={i}>
          <div>
            <span>{i+1}</span>{value}
          </div>
        </li>
      );
    })
  }
  return (
    <Card className="multistep-section">
      <Container>
        <Card className="steps-bar">
          <List>
          {renderData(list)}
          </List>
        </Card>
        <Card className="steps-block-main">{renderFunction(steps)}</Card>
      </Container>
    </Card>
  );
}
