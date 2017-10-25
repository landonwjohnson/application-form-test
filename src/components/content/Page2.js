import React, { Component } from 'react';

export default class Page1 extends Component {
  render() {
    return (
      <div>
        <label> What's your Name </label>
        <br/>
          <input type = "text" placeholder="First" />
          <input type = "text" placeholder="Last" />
        <br/>
        <br/>
        
      </div>
      
    );
  }
}