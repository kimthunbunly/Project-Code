import React, { Component } from 'react';
import '../../assets/css/App.css';
import logo from '../../assets/image/logo.png';
class Header extends Component {
  render() {
    return (
    <div>
        <div className="header">
            <div className="brand-logo">
              <img src={logo} alt="logo"/>
            </div>
          <ul id="nav-panel" className="header-rigth header-menu">
            <li><a href="html">Home</a></li>
            <li><a href="html">Contact</a></li>
            <li><a href="html">About us</a></li>
              <input type="text" placeholder="Search.."/>
          </ul>
        </div>
    </div>
    );
  }
}

export default Header;
