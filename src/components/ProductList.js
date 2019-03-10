import React, { Component } from 'react';
// import Product from './Product';
import Title from './Title';
import action from '../Redux/Actions/action';
import { connect } from 'react-redux'
import Product from './Product';
class ProductList extends Component {
  
  componentDidMount() {
    console.log('***Product list state: ', this.props.products)
    console.log('***ProductList Dispatch***: ', this.props.getProducts)
  }

getItem = id => {
  const product = this.props.products.find(item => item.id === id);
  return product;
};


addItemToCart = (id) => {
console.log('add to cart', this.props.products)

let tempProducts = this.props.products;
console.log('temProduct: ', tempProducts)
const index = tempProducts.indexOf (this.getItem(id));
console.log(index)
const product = tempProducts[index];
console.log(product)
product.inCart = true;  
this.props.dispatch(action())
}

  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name='our ' title=' products' />

            <div className="row" />
            {
              this.props.products.map(items => {
                return <Product key = {items.id} products = {items} handleClick={this.addItemToCart} />
              })
            }
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.reducer.products
  }
}

export default connect(mapStateToProps)(ProductList)