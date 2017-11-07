import React, { Component } from 'react';
import router from '../../router';
import { withRouter } from 'react-router-dom'

class Page2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      facebook: '',
      instagram: '',
      snapchat: '',
      phoneNumber: '',
      color: ''
    }
    this.handleNext = this.handleNext.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleNext(e){
    e.preventDefault()
    this.props.history.push("/thankyou")
    console.log(this.props.history)
  }

  
  
  handleInputChange(e){
    e.preventDefault()  
    const key = e.target.id 
    const value = e.target.value
    this.setState({
      [key]: value
    }, () => {
      this.props.updateFormState(this.state)
    })
  }

  
  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleNext}>
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
                  max={30}
                  value={this.state.instagram}
                  onChange={this.handleInputChange}
                />
        <br/>
        <label> Snapchat </label>
                <input type="text"
                  min={3}
                  maxLength={"15"}
                  id="snapchat"
                  value={this.state.snapchat}
                  onChange={this.handleInputChange}
                />

                <div className="step__btn_container">
                <button type="submit" className="drk-btn" >Next Step</button>
              </div>
      
        </form>
        
      </div>
      
    );
  }
}

export default withRouter(Page2);