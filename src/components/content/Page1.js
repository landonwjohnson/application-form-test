import React, { Component } from 'react';

export default class Page1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      birthday: '',
      gender: '',
      color: '',
    }
    this.getBirthday = this.getBirthday.bind(this);
    this.getColor = this.getColor.bind(this);
    this.getGender = this.getGender.bind(this);
  }

  getBirthday(e) {
    this.setState({ birthday: e.target.value });
  }

  getColor(e) {
    this.setState({ color: e.target.value });
  }

  getGender(e) {
    this.setState({ gender: e.target.value });
  }
 
  handleChange(event) {
    this.setState({

    })
  }

  
  render() {
    console.log(this.state.birthday);
    
    return (
      
      <div>
        <div className="input">
              <h1>Input</h1>
              <label>Gender</label>
              <br/>
              <br/>

              <label> Birthday </label>
              <br/>
                  <input type = "date" value={this.state.birthday} onChange={this.getBirthday} placeholder="birthday" />
              <br/>
              <br/>


              <label for="background-color">What's your favorite color</label>
              <br/>
                <input id="background-color" value={this.state.color} onChange={this.getColor} type="color" /> 
              <br/>
        </div>
        

        <div className="output">
              <h1>Output</h1>
              Birthday: {this.state.birthday}
              </div>
        </div>
      
    );
  }
 

}