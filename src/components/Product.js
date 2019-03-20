import React, {Component} from 'react';
import {Card,Button, ListGroup, ListGroupItem } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import img from './Collections/images/men.jpg'
class Product extends Component{
  render(){
    const {_id, title, price, inCart} = this.props.products
    return(
      <div>
        <div className='my-container'>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                      <Card.Title><b>Title:</b> {title}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem><span><b>Price:</b></span> $ {price}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                    <Button variant="outline-success" disabled={inCart ? true: false}
                     onClick={() => this.props.handleClick(_id)}
                    >
                   {
                    inCart?(<p className='text-capitalize mb-0' disabled>
                    {' '}
                                  in cart
                    </p>
                    ):(
                   <i className='fas fa-cart-plus' />
                    )
                  }
                  </Button>
                    </Card.Body>
                    <Card.Footer>
                     <p className="text-muted">Last Update: <span>{new Date().toLocaleTimeString()}</span></p>
                  </Card.Footer>
                  </Card>
        </div>
      </div>
    )
  }
}
export default Product;

// Product.propTypes = {
//   products: PropTypes.shape({
//     id: PropTypes.number,
//     img:PropTypes.string,
//     title:PropTypes.string,
//     price:PropTypes.number,
//     inCart:PropTypes.bool
//   }).isRequired

/* <Card border='info' style={{ width: '18rem' }}><br />
    <Card.Title>Title:  {title}</Card.Title>
    <Link to='/details'>
  <Card.Img variant="top" src={img} alt={'Product image'} />
  </Link>
  <Card.Body>
    <Link to='/details'>
    <Button variant="outline-primary">Go to Details</Button>
    </Link>
    <Button variant="outline-success" disabled={inCart ? true: false}
    onClick={() => this.props.handleClick(id)}
    >
    {
      inCart?(<p className='text-capitalize mb-0' disabled>
      {' '}
      in cart
      </p>
      ):(
        <i className='fas fa-cart-plus' />
      )
    }
    </Button>
    <Card.Text>
   {title}
   <span className='mr-1'>$</span>
   {price}
    </Card.Text>

  </Card.Body>
</Card>
} */