import {
  FormGroup,
  Input,
  Button,
} from "reactstrap";
export default function FormInput({
    formValue,
    firstError,
    lastError,
    emailError,
    mobError,
    nationError,
    firstValid,
    lastValid,
    emailValid,
    mobValid,
    nationValid,
    handleInputChange,
    handleCheckEmail
}) {
    
    const addAnother = () => {
        // var c = count;
        // c.push(2);
        // console.log(count);
        // setCount(c)
        // console.log("ddd");
      }
    return (
        <>
           <FormGroup>
            <div className="shareholder-fields">
              <Input name="" valid={firstValid} invalid={firstError} placeholder="First Name" type="text" onChange={(ev) => handleInputChange(ev, 'firstName')}/>
              {firstError ? <p className="required-text">First name is required</p> : ''}
            </div>
            <div className="shareholder-fields"> 
              <Input name="" valid={lastValid} invalid={lastError} placeholder="Last name" type="text" onChange={(ev) => handleInputChange(ev, 'lastName')} />
              {lastError ? <p className="required-text">Last name is required</p>  : ''}           
            </div>          
          </FormGroup>
          <FormGroup className="mob-full">
            <div className="email-check">
              <div>
                <Input name="" value={formValue.email} valid={emailValid} invalid={emailError} placeholder="Email address" type="email" onChange={(ev) => handleInputChange(ev, 'email')}/>
                {emailError ? <p className="required-text">Email seems to be valid</p>  : ''}     
              </div>
              <Button onClick={handleCheckEmail}>Check</Button>
            </div>
            <div className="shareholder-fields">
              <Input name="" type="number" valid={mobValid} invalid={mobError} value={formValue.mobilenumber} placeholder="Mobile number" onChange={(ev) => handleInputChange(ev, 'mobilenumber')}/>
              {mobError ? <p className="required-text">Mobile number is required</p>  : ''}    
            </div>
          </FormGroup>
          <FormGroup className="mob-full">
            <div className="shareholder-fields">
              <Input name="" value={formValue.nationality} valid={nationValid} invalid={nationError} placeholder="Nationality" type="text" onChange={(ev) => handleInputChange(ev, 'nationality')}/>
              {nationError ? <p className="required-text">Nationality is required</p>  : ''}   
            </div>
            <div className="add-another">
              <Button onClick={addAnother}>Add another</Button>
            </div>
          </FormGroup>
        </>
    )
}
