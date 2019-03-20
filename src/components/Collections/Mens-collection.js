import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMensProduct } from '../../../src/Redux/Actions/action';
import {Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import img from './images/men.jpg';
// import blob from 'blob';

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
 
//   validateResponse  (response)  {
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return response;
//   }
  
// readResponseAsBlob = (response) => {
//     return response.blob();
//   }
  
  
// logResult = (result) => {
//   console.log(result);
// }

// logError = (error) => {
//   console.log('Looks like there was a problem:', error);
// }

// showImage = (responseAsBlob) => {
//   const imgContainer = document.getElementById('img-container');
//   const imgElm = document.createElement('img')
//   imgContainer.appendChild(imgElm)
//   const imgUrl = URL.createObjectURL(responseAsBlob)
//   imgElm.src= imgUrl
// }

// fetchImage = () => {
//   fetch('http://localhost:8000/image/e8ba91cb61b4380cf4f09e686fb8cfaf.png')
//   .then(validate => {
//     if(!validate.ok) {
//       throw Error (validate.statusText)
//     }
//   }) // 2
//   .then(res => res.blob() ) // 3
//   .then(myBlob => {
//     const imgContainer = document.getElementById('img-container');
//     const imgElm = document.createElement('img')
//     imgContainer.appendChild(imgElm)
//     const imgUrl = URL.createObjectURL(myBlob)
//     imgElm.src= imgUrl
//   }) // 4
//   .catch(err => {
//     console.log("ERROR", err)
//   });
// }

// const imgButton = document.getElementById('img-btn');
// imgButton.addEventListener('click', fetchImage);

// handleCount = () => {
//   const item = this.state.products.map(())
// }
  render() {
    return (
      <div>
        <h1>Hello from Mens Collection</h1>
        <button id="img-btn" onClick={this.fetchImage}>Fetch image</button>
        <section className="img-container" id="img-container">

        </section>
        <div className="my-container">
          {
            this.state.products.map((product) => {
              return (
                <div key={Math.random()}>
                  <span>ID: {product._id}</span>
                  <Card style={{ width: '18rem' }}>
                  <Link to={'/details/'+product._id}><Card.Img variant="top" src={img} /></Link> 
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
                  <Link to={'/details/'+product._id }><button>Go to details</button> </Link>                
                    <button>Add To Cart</button>                  
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
