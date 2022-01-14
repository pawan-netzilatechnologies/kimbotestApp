import react, { useState } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Form, Button, FormGroup, Input, Col, Row } from "reactstrap";
import searchicon from "../../images/searchicon.png"

function Header() {
    const [open, setOpen] = useState(false);
    const showCollpse = () =>{
        setOpen(!open);
    }
    return (
        <div>
        <Navbar
          color="light"
          expand="md"
          light
          container
        >
          <Row >
            <Col xs="5">
              <NavbarBrand href="/">
                kimbocorp
              </NavbarBrand>
              
              <Form className="header-search-form not-show">
                <Button>
                    <img src={ searchicon }/>
                  </Button>
                
                <FormGroup>
                  <Input
                    id="exampleSearch"
                    name="search"
                    placeholder="search placeholder"
                    type="search"
                  />
                </FormGroup>
              </Form> 
            </Col>

            <Col xs="7">
            <NavbarToggler onClick={showCollpse} />
            <Collapse navbar isOpen={open}>
              <Nav
                className="me-auto"
                navbar
              >
                <NavItem>
                  <NavLink href="#">
                    Company
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                  Create new business 
                  </NavLink>
                </NavItem>
             
              </Nav>
              
            </Collapse>
            </Col>
          </Row>
          
            <a href="#" className="header-circle-btn not-show" ></a>          
          
          
        </Navbar>
      </div>
  );
}

export default Header;