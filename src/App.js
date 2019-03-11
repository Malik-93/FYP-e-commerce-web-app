import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from 'react-router-dom';
import Navigation from './components/Layout/Navbar';
import Footer from './components/Footer';
import Mens from './components/Collection/Mens';
class App extends Component {
  render() {
    return ( 
      <div className='App'>
       <Navigation />
      <Switch>
      <Route exact path='/' component={App}></Route>
       <Route path='/details' component={Mens}></Route> 
      </Switch>
       {<br />}
       <Footer />
      </div>

      );
  }
}
export default App;
