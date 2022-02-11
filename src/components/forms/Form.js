import { useState } from "react";
import {
  Form,
  FormGroup,
  Button,
} from "reactstrap";
import FormInput from './FormInput';
export default function Forms({
    myform,
    setMyForm,
    backStep,
    nextStep,
    shareholderAr
}) {
  const [firstError, setFirstError] = useState(false);
  const [lastError, setLastError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobError, setMobError] = useState(false);
  const [nationError, setNationError] = useState(false);
  const [firstValid, setFirstValid] = useState(false);
  const [lastValid, setLastValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [mobValid, setMobValid] = useState(false);
  const [nationValid, setNationValid] = useState(false);
  const [formValue, setFormValue] = useState({
    firstName :'',
    lastName :'', 
    email :'', 
    mobilenumber :'', 
    nationality :'',
  });  

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const handleInputChange = (ev, name) => {
    setFormValue({...formValue , [name]: ev.target.value})
    if(name === 'firstName'){
      if(ev.target.value === ""){
        setFirstError(true)
      }else{
        setFirstError(false)
        setFirstValid(true)
      }
    }
    if(name === 'lastName'){
      if(ev.target.value === ""){
        setLastError(true)
      }else{
        setLastError(false)
        setLastValid(true)
      }
    }
    if(name === 'email'){
      if(ev.target.value === "" || !validateEmail(formValue.email)){
        setEmailError(true)
      }else{
        setEmailError(false)
        setEmailValid(true)
      }
    }
    if(name === 'mobilenumber'){
      if(ev.target.value === "" || ev.target.value.length < 10){
        setMobError(true)
      }else{
        setMobError(false)
        setMobValid(true)
      } 
    }
    if(name === 'nationality'){
      if(ev.target.value === ""){
        setNationError(true)
      }else{
        setNationError(false)
        setNationValid(true)
      }
    }
  }
  const handleCheckEmail = () => {
    if(formValue.email === ""){
      setEmailError(true)
      return false;
    }else if(!validateEmail(formValue.email)){
      console.log("erro");
      setEmailError(true)
      return false; 
    }else{
      setEmailError(false)
    }
  }

    const saveData = () => {
        var error = false;
        if(formValue.firstName === ""){
          setFirstError(true)
          error= true;
        } 
        if(formValue.lastName === "" ){
          setLastError(true)
          error= true;
        } 
        if(formValue.email === "" || !validateEmail(formValue.email)){
          setEmailError(true)
          error= true;
        }
        if(formValue.mobilenumber ===""){
          setMobError(true)
          error= true;
        } 
        if(formValue.nationality === ""){
          setNationError(true)
          error= true;
        }
        if(error === false){
          setMyForm({...myform ,[shareholderAr]: formValue});
          nextStep()
        }
    }
  
    return (
        <Form>
          <FormInput 
            formValue={formValue}
            handleCheckEmail={handleCheckEmail}
            handleInputChange={handleInputChange}
            firstError={firstError}
            lastError={lastError}
            emailError={emailError}
            mobError={mobError}
            nationError={nationError}
            firstValid={firstValid}
            lastValid={lastValid}
            emailValid={emailValid}
            mobValid={mobValid}
            nationValid={nationValid}
          />
          <FormGroup className="step-from-btn">
            <Button onClick={backStep}>Back</Button>
            <Button onClick={saveData}>Save & Next</Button>
          </FormGroup>
        </Form>
    )
}