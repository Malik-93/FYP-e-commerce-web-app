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
            <Link to='/collection/mens'><Navbar.Brand>Mens</Navbar.Brand></Link>
            <Link to='/collection/womens'><Navbar.Brand>Womens </Navbar.Brand></Link>
            <Link to='/collection/kids' ><Navbar.Brand>Kids</Navbar.Brand></Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-secondary">Search</Button>
              <Link to='/cart'>
              <Button variant='outline-success'>
                <span className='mr-2'>
                  <i className="fas fa-cart-plus"></i>
                </span>
                my cart
              </Button>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        {<br />}
      </div>
    );
  }
}
export default Navigation;