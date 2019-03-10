import React, { Component } from 'react';
// import logo from './company-logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Default from './components/404';
import { Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './Redux/Store'
class App extends Component {

  render() {
    return (
      <Provider store = {store}>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ProductList}></Route>
          <Route path='/details' component={Details}></Route>
          <Route path='/cart' component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
      </React.Fragment>
      </Provider>
    );
  }
}


export default App;
