import React, { Component } from 'react'
// import { Row, Col,  ListGroup, ListGroupItem } from 'reactstrap';
// import { Jumbotron, Container} from 'react-bootstrap';
import ProductList from './ProductList';
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
            <div>
                <ProductList />
            </div>
  
)
    }
}