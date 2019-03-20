import React, { Component } from 'react';
import img from './Collections/images/men.jpg'
import {Link} from 'react-router-dom';
class Details extends Component {
  constructor(props){
    super(props);
    this.state = {
     products: [],
  }
}

  componentDidMount() {
  fetch('http://localhost:8000/details/' + this.props.match.params.id)
  .then(res =>  res.json())
  .then(product => {
    this.setState({
      products: product.data
    })
    console.log(this.state.products)
  })
  .catch(err => {
  })  
  }
  // componentWillReceiveProps = (nextProps) => {
  //   console.log('cwrp', )
  // }
  

  render() {
    return (
      <div className="container py-5">
      {/* title */}
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{this.state.products.title}</h1>
        </div>
      </div>
      {/* end of title */}
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <img src={img} className="img-fluid" alt="" />
        </div>
        {/* prdoduct info */}
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h1>model : {this.state.products.title}</h1>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            made by : <span className="text-uppercase">{this.state.products.company}</span>
          </h4>
          <h4 className="text-blue">
            <strong>
              price : <span>$</span>
              {this.state.products.price}
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            some info about product :
          </p>
          <p className="text-muted lead">{this.state.products.info}</p>
          {/* buttons */}
          <div>
            <Link to="/">
              <button>back to products</button>
            </Link>
            <button
              cart disabled={ this.state.products.inCart ? true : false}>
              {this.state.products.inCart ? "in cart" : "add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>

      )
  }
}
export default Details