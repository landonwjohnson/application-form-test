import React, { Component } from 'react';
import './App.css';
import Body from './components/Body';
import styled from 'styled-components';
import router from './router';
import moment from 'moment';
import Filter from './components/Filter';


const StyledApp = styled.div`
  background-color: ${propsies => propsies.niceColor};
`;

const OutPut = styled.div`
  background-color: ${'white'};
  padding: 20px;
`

let now = moment();


class App extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      currentDate: `${now._d}`,
      formValues: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        birthday: '',
        age: '',
        gender: '',
        color: '',
        city: '',
        usaState: '',
        weight: ''
      },
    }
    this.updateFormState = this.updateFormState.bind(this);
  }

   
    

  updateFormState(newValues){
    this.setState({formValues: newValues});
  }

  




  render() {
    var day = moment(this.state.formValues.birthday);
    console.log(day)
    console.log(now)
    console.log(this.state)
    return (
      <StyledApp niceColor={this.state.formValues.color || 'white'} className="App">
        <div className="test-top">
        <Body updateFormState={this.updateFormState} formValues={this.state.formValues}/>
        <OutPut>
              <h1>Output</h1> <h6>this information is saved to database</h6>
               <p>Date:{this.state.currentDate}</p>
               <p>Gender:{this.state.formValues.gender}</p>
               <p>Age:</p>
               <p>Birthday: {this.state.formValues.birthday}</p>
               <p>Color: {this.state.formValues.color} </p>
               <p>Height(meters): </p>
               <p>Weight(lbs): {this.state.formValues.weight}</p> 
               <p>BMI: </p>
        </OutPut>
        </div>
        <div className="test-bottom">
        <Filter />
        </div>
        <div>
          <h3>Things to do </h3>
        <ul>
          <li>can't access form unless they are 18</li>
          <li>Be able to upload pictures</li>
          <li>Statistics page wil show how many times the application has been filled out</li>
          <li>Use Facebook Authorization to fill out Name, City, Education, Work, where they live, where they lived, and use facebook profile picture. </li>
        </ul>
      </div>
      </StyledApp>
     
    );
  }
}

export default App;
