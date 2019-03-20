import React, { Component } from 'react';
import { getAllProduct } from '../Redux/Actions/action';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import Product from './Product';
import MensCollection from '../components/Collections/Mens-collection';
import WomensCollection from '../components/Collections/Womens-collection';
import KidsCollection from '../components/Collections/Kids-collection';

class ProductList extends Component {
  state = {
    products: [],
    cart: []
  }

componentDidMount() {
  fetch("http://localhost:8000/allProducts")
  .then(res => res.json() )
  .then(products => {
      console.log("All Products of DataBase", products)
      this.props.dispatch( getAllProduct(products) )
  })
  .then( () =>  {
    this.setProducts()
    console.log('cdm state**/*/*/', this.state)
  } 
   )
  .catch(err => console.log(err))
}

// componentWillReceiveProps = (nextProps) => {
//   console.log('nextprops', nextProps.products.data)
//   this.setState({
//     products: nextProps.products.data
//   })
// }
  

  // componentDidMount() {
  //   this.setProducts()
  //   console.log('cdm', this.state.products)
  //   console.log('***Productlist own state: ', this.state.products.inCart)
  //   console.log('***Product list state inCart value: ', this.props.products.inCart)
  //   const check = this.props.products[0].inCart = true
  //   console.log('***Check***: ',check)
  //   console.log('***Add To Cart Dispatcher***: ', this.props.addToCart)
  // }

  setProducts = () => {
    let products = [];
    console.log('SetProducts func***', this.props.products)
    this.props.products.forEach(item => {
      const singleItem = {...item }; //What does it mean
      console.log('Single Item*****', singleItem)
      products = [...products, singleItem];
      console.log('set Product final produtss*******', products)
    });
    this.setState(() => {
      return { products};
    })
  }
  getItem = id => {
  const product = this.state.products.find(item => item.id === id);
  return product;
};


addItemToCart = (id) => {
let tempProducts = [...this.state.products];
console.log('temProducts****: ', tempProducts)
const index = tempProducts.indexOf (this.getItem(id));
console.log ('Index ***', index)
const product = tempProducts[index];
console.log(product)
product.inCart = true;  
this.setState(() => {
  return {
    products: [...tempProducts],
    cart: [...this.state.cart, product],
  }
})
}

  render() {
    return (
      <div>
    <hr />
    <hr />
   <div>
    {console.log('render*******', this.props.products)}
      <div className="py-5">
        <div className="container my-card">

          <div className="row" />
           {
            this.state.products.map(items => {
              return <Product key = {items._id} products = {items} handleClick={ this.addItemToCart } />
            })
          } 
         </div> 
       </div> 

  <MensCollection />
  <hr />
  <hr />
  <WomensCollection />
  <hr />
  <hr />
<KidsCollection />
    </div>
        
    </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.reducer.allProducts
  }
}

export default connect(mapStateToProps)(ProductList)


//  <div>
// {
//   this.state.products.map((product) => {
//     return (
//       <div key={Math.random()}>
//         {console.log("mens check", product)}
//       <li>ID: {product._id}</li>
//       <li >Title: {product.title}</li>
//       <li >Price: {product.price}</li>
//       <li >Company:{product.company}</li>
//       <li >Info: {product.info}</li>
//       <li >inCart:{console.log(product.inCart)} {product.inCart}</li>
//       <li >Count: {product.count}</li>
//       <li >Total: {product.total}</li>
//       </div>
//     )
//   })
// }
// </div> 
