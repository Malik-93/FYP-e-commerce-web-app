import React, { Component } from 'react'
import { Row, Col,  ListGroup, ListGroupItem } from 'reactstrap';
import { Jumbotron, Container } from 'react-bootstrap';

export default class Layout extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    render() {
        return (
            <Container>
                 <Row>
    <Col xs="4" sm="3">
    <ListGroup>
          <ListGroupItem active tag="a" href="#" action>Cras justo odio</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem disabled tag="a" href="#" action>Vestibulum at eros</ListGroupItem>
          <ListGroupItem disabled tag="a" href="#" action>Vestibulum at eros</ListGroupItem>
          <ListGroupItem disabled tag="a" href="#" action>Vestibulum at eros</ListGroupItem>
          <ListGroupItem disabled tag="a" href="#" action>Vestibulum at eros</ListGroupItem>
          <ListGroupItem disabled tag="a" href="#" action>Vestibulum at eros</ListGroupItem>
    </ListGroup>
    </Col>
    <Col xs="6" sm="9">
 <Jumbotron fluid>
<Container>
<h1>Fluid jumbotron</h1>
<p>
<br />
</p>
</Container>
</Jumbotron>    
    </Col>
  </Row>
</Container>
        )
    }
}

export const Header = () => {
   return (
   <Container style={{borderStyle: 'dotted'}}>
    <Row>
      <Col>.col</Col>
    </Row>
    </Container>
   )}
