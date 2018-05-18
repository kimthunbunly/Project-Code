import React, { Component } from 'react';
import '../../assets/css/App.css';
import workgroup from '../../assets/image/workgroup.jpg';

class Content extends Component {
  render() {
    return (
    <div>
        <div className="column right">
          <div className="content">
            <img src={workgroup} alt="workgroup"/>
            <div className="align-center">
                <h1>Welcome to MyReact Website Template</h1>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default Content;
