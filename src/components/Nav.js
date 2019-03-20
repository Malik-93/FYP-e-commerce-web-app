import React from 'react';
import { Nav, Navbar, FormControl, Button, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
class Navigation extends React.Component {

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
        <Link to='/'><Navbar.Brand>Clothing Shope</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" >
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-secondary">Search</Button>
           <Link to='/signup'><Navbar.Brand><i className="fas fa-user-plus"></i>Sign Up</Navbar.Brand></Link>        
           <Link to='login'>  <Navbar.Brand><i className="fas fa-user-check"></i>Sign In</Navbar.Brand></Link>        
            </Nav>
            <Form inline>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        {<br />}
      </div>
    );
  }
}
export default Navigation;