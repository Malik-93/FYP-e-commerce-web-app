import React, { Component } from 'react';
// import action from '../Redux/Actions/action';
import { connect } from 'react-redux';
class ProductForm extends Component {

  // componentDidMount = () => {
  //   console.log('Form state', this.props.addToDb({ 
  //     title: 'Mobile',
  //     price: 500
  //   }))
  // }
  

  // componentDidMount = () => {
  //   fetch('http://localhost:8000/getDbmens')
  //   .then((res) => res.json())
  //   .then((product) => {
  //         console.log("DB Product", product)
  //       this.props.addToDb(product)
  //   })
  //   .catch((error) => console.log(error))  
  // }
  
  
  // addProduct = () => {
  //   const newProduct = {
  //     title: document.getElementById('title').value,
  //     title: document.getElementById('product_title').value,
  //     info: document.getElementById('product_info').value,
  //     company: document.getElementById('product_company').value,
  //     price: document.getElementById('product_price').value,
  //   }
  //   this.props.dispatch(action(newProduct))
  //   console.log(newProduct)
  //   }
     
handleCart = () => {
  console.log('You clicked on cart button ****')

  fetch("http://localhost:8000/update")
    .then((res) => res.json())
    .then((product) => { console.log(product)  })
    .catch((err) => console.log(err))
}

addProduct = () => {
  const newProduct = {
      title: document.getElementById('title').value,
      price: document.getElementById('price').value,
      company: document.getElementById('company').value,
      info: document.getElementById('info').value,
      count: document.getElementById('count').value,
      total: document.getElementById('total').value,
  }
    var options = {
        method: 'POST',
        body: JSON.stringify(newProduct ),
        headers: { 'Content-Type': 'application/json'}
    }
    fetch('http://localhost:8000/addProduct', options)
        .then((res) => res.text())
        .then((product) => {
          console.log(product)
          this.props.addToDb(product)
        })
        .catch((error) => console.log(error))
}

// getMensCollection = () => {

//   fetch('http://localhost:8000/getDbmens')
//       .then((res) => res.text())
//       .then((product) => {
//             console.log("DB Product", product)
//           this.props.addToDb(product)
//       })
//       .catch((error) => console.log(error))
// }

// getKidsCollection = () => {

//   fetch('http://localhost:8000/kids')
//       .then((res) => res.text())
//       .then((product) => {
//           console.log("DB Product", product)
//           this.props.addToDb(product.data)
//       })
//       .catch((error) => console.log(error))

// }

// getWomensCollection = () => {

//   fetch('http://localhost:8000/womens')
//       .then((res) => res.text())
//       .then((product) => {
//           console.log("DB Product", product)
//           this.props.addToDb(product.data)            
//       })
//       .catch((error) => console.log(error))

// }

render() {
    console.log('Form Render Data from store', this.props.products)  

    return (
      <div>
        {/* Data from Database:
        <ul>
        {
          this.props.products.map((item) => {
            return <li key={Math.random()}>Title:{item[0].title}</li>
          })
        }
        </ul>  */}
        {/* {console.log('Form updated state', this.props.products)} */}
      <div>
      <form>
         Title:
         <input type="text" id="title" /><br />
        Price: <input type="number" id="price" /><br />
        Company: <input type="text" id="company" /><br />
        Info: <input type="text" id="info" /><br />
        Count: <input type="number" id="count" /><br />
        Total: <input type="number" id="total" /><br />
        <input type='button' value='In Cart' onClick={this.handleCart}></input>
    </form>
    <button onClick={this.addProduct}>Add Products</button><br />
    <button onClick={this.getMensCollection}>Get Mens Collection</button><br />
    <button onClick={this.getWomensCollection}>Get Womens Collection</button><br />
    <button onClick={this.getKidsCollection}>Get Kids Collection</button>
      </div>
        
      </div>
    )
  }
}
// const mapStateToProps = (state) => {
//   return{
//     products: state.reducer
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToDb: (product) => dispatch(action(product))
//   }
// }
export default connect()(ProductForm)