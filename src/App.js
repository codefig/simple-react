import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';

import "./vendor/bootstrap/css/bootstrap.min.css" 
import "./vendor/fontawesome-free/css/all.min.css"
import "./css/sb-admin.css"

// import "./vendor/jquery/jquery.min.js"
// import "./vendor/bootstrap/js/bootstrap.bundle.min.js"
// import "./vendor/jquery-easing/jquery.easing.min.js"

//import components into the application 
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Register/>
      </div>
    );
  }
}

export default App;
