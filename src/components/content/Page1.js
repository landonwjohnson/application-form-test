import React, { Component } from 'react';
import styled from 'styled-components';
import router from '../../router';


const StyledPage1 = styled.div`
  background-color: white;
`;



export default class Page1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      birthday: '',
      gender: '',
      color: '',
      weight: ''
    }
    this.handleNext = this.handleNext.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleNext(e){
    e.preventDefault()
    this.props.history.push("/page/2")
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
    console.log(this.props);
    
    return (
      
      <StyledPage1>
        <div className="input">
   
            
              <br/>
          <form onSubmit={this.handleNext}>
              <h1>Input</h1>
            

              <label>Gender</label>
              <br/>
                  <select id="gender" value={this.state.gender} onChange={this.handleInputChange} required>
                    <option></option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                  </select>
              <br/>

              <label> Birthday </label>
              <br/>
                  <input type="date" 
                    id="birthday"
                    value={this.state.birthday} 
                    onChange={this.handleInputChange} 
                    required
                  />
              <br/>
              <br/>

              <label> What's your favorite color? </label>
                  <select id="color" value={this.state.color} onChange={this.handleInputChange} style={{"background-color": `${this.props.state}`}} required>
                        <option></option>
                        <option value="Red" style={{"background-color":"red"}}>Red</option>
                        <option value="Blue" style={{"background-color":"blue"}}>Blue</option>
                        <option value="Green" style={{"background-color":"green"}}>Green</option>
                        <option value="Pink" style={{"background-color":"pink"}}>Pink</option>
                        <option value="Purple" style={{"background-color":"purple"}}>Purple</option>
                        <option value="Orange" style={{"background-color":"orange"}}>Orange</option>
                        <option value="Teal" style={{"background-color":"teal"}}>Teal</option>
                  </select>
                  <br/>
                  <br/>
              <label>Height</label>
              <br/>
              <div><input type="number" max={8} min={0} />' <input type="number" max={9} min={0} /> "</div>
              <br/>
              <label>Weight</label>
              <br/>
              <div><input type="number" id="weight" max={300} min={0}  value={this.state.weight} onChange={this.handleInputChange} />lbs</div>

              


              <div className="step__btn_container">
                <button type="submit" className="drk-btn" >Next Step</button>
              </div>
           
          </form>
        </div>
        
        

        
        </StyledPage1>
      
    );
  }
 

}

