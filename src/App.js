import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'

class App extends Component {
  render() {
    return (
    <div>
        <Header/>
        <Navbar/>
    </div>
    );
  }
}

export default App;
