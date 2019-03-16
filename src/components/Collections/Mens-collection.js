import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMensProduct } from '../../../src/Redux/Actions/action';
import {Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';
class MensCollection extends Component {

  state = {
    products: []
  }


  componentDidMount = () => {
    fetch('http://localhost:8000/getDbmens')
      .then((res) => res.json())
      .then((product) => {
        console.log(" DB Product ", product)
        this.props.getMens(product)
      })
      .catch((error) => console.log(error))
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('nextProps', nextProps.products)
    this.setState({
      products: nextProps.products.data
    })
  }


  render() {
    return (
      <div>
        <h1>Hello from Mens Collection</h1>
        <div>
          {
            this.state.products.map((product) => {
              return (
                <div key={Math.random()}>
                  <span>ID: {product._id}</span>
                  {console.log("mens check", product)}
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                    <Card.Body>
                      <Card.Title><b>Title:</b> {product.title}</Card.Title>
                      <Card.Text>
                        {product.info}
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem><b>Company:</b> {product.company}</ListGroupItem>
                      <ListGroupItem><span><b>Price:</b></span> $ {product.price}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                    <Link to="/collection/mens"> <button>Continue Shoping</button> </Link>
                      <Link to="/cart"><button>Go to Cart</button> </Link>                  
                        </Card.Body>
                    <Card.Footer>
                     <p className="text-muted">Last Update: <span>{new Date().toLocaleTimeString()}</span></p>
                  </Card.Footer>

                  </Card>
             </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.reducer.mensProducts
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getMens: (product) => dispatch(getMensProduct(product)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MensCollection)

// {/* <li>ID: {product._id}</li>
// <li >Title: {product.title}</li>
// <li >Price: {product.price}</li>
// <li >Company:{product.company}</li>
// <li >Info: {product.info}</li>
// <li >inCart:{console.log(product.inCart)} {product.inCart}</li>
// <li >Count: {product.count}</li>
// <li >Total: {product.total}</li> */}
