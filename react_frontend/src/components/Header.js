import React from 'react';
import {Navbar, Nav, Button, Form, FormControl, NavDropdown} from 'react-bootstrap';
import mylogo from '../apple-touch-icon.svg'


const Header = () => {
    return (


<Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">
      <img
        src={mylogo}
        alt=""
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Morris Eguakun - Software Engineer
    </Navbar.Brand>
   <Nav className="m-auto">

      <Nav.Link href="/">Home</Nav.Link>


        <NavDropdown title="About Me">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
        </NavDropdown>

               <NavDropdown title="Games">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
        </NavDropdown>

               <NavDropdown title="Projects">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
        </NavDropdown>


       <NavDropdown title="Tutorials">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
        </NavDropdown>

       <Nav.Link href="/">Contact Me</Nav.Link>


   </Nav>
    <div className={"ms-auto"}>
   <Form inline className="d-flex align-items-end">
      <FormControl  type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light" >Search</Button>
   </Form>
    </div>
</Navbar>


    )
};

export default Header;