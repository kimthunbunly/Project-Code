import React, { Component } from 'react';
import './assets/css/App.css';
import Navbar from './components/Navbar/Navbar.js'
import Header from './components/Header/Header.js'
import Content from './components/Content/Content.js'

class App extends Component {
  render() {
    return (
    <div>
        <Header/>
        <Navbar/>
        <Content/>
    </div>
    );
  }
}

export default App;
