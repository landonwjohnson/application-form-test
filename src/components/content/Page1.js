import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Page1 extends Component {
  constructor(){
    super();
    this.state = {
      birthday: '',
      gender: '',
      color: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNext = this.handleNext.bind(this);
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
    })
  }

  

  
  render() {
    console.log(this.state);
    
    return (
      
      <div>
        <div className="input">
   
            
              <br/>
          <form onSubmit={this.handleNext}>
              <h1>Input</h1>
            

              <label>Gender</label>
              <br/>
                  <select id="gender" value={this.state.gender} onChange={this.handleInputChange} required>
                    <option></option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
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
                  <select id="color" value={this.state.color} onChange={this.handleInputChange} style={{"background-color": `${this.state.color}`}} required>
                        <option></option>
                        <option value="red" style={{"background-color":"red"}}>Red</option>
                        <option value="blue" style={{"background-color":"blue"}}>Blue</option>
                        <option value="green" style={{"background-color":"green"}}>Green</option>
                  </select>


              


              <div className="step__btn_container">
                <button type="submit" className="drk-btn" >Next Step</button>
              </div>
           
          </form>
        </div>
        <div className="output">
              <h1>Output</h1>
               <p>Gender:{this.state.gender}</p>
               <p>Birthday: {this.state.birthday} </p>
              <div className="color-output" style={{"background":`${this.state.color}`}}></div>
        </div>
        

        
        </div>
      
    );
  }
 

}

export default withRouter(Page1)