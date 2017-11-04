import React, { Component } from 'react';
import router from '../../router';

export default class Page2 extends Component {
  constructor(){
    super();
    this.state = {
      phoneNumber: '',
      facebook: '',
      instagram: '',
      snapchat: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleNext(e){
    e.preventDefault()
    this.props.history.push("/page/3")
    console.log(this.props.history)
  }

  handleInputChange(e){
    e.preventDefault()  
    const key = e.target.id 
    const value = e.target.value
    this.setState({
      [key]: value
    })
  }

  
  render() {
    console.log(this.state)
    return (
      <div>
        <form>
        <label> Phone Number </label>
                <input type="text"
                  id="phoneNumber"
                  placeholder="000-000-0000"
                  maxLength={12}
                  minLength={10}
                  value={this.state.phoneNumber}
                  onChange={this.handleInputChange}
                  required
                />
        <br/>
        <label> Facebook </label>
                <input type="text"
                  id="facebook"
                  value={this.state.facebook}
                  onChange={this.handleInputChange}
                />
        <br/>
        <label> Instagram </label>
                <input type="text"
                  id="instagram"
                  value={this.state.instagram}
                  onChange={this.handleInputChange}
                />
        <br/>
        <label> Snapchat </label>
                <input type="text"
                  id="snapchat"
                  value={this.state.snapchat}
                  onChange={this.handleInputChange}
                />
      
        </form>
        
      </div>
      
    );
  }
}