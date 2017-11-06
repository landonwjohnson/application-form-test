import React, { Component } from 'react';
import './App.css';
import Body from './components/Body';
import styled from 'styled-components';
import router from './router';
import moment from 'moment';
import Filter from './components/Filter';
import ToDo from './components/ToDo';


const StyledApp = styled.div`
  background-color: ${propsies => propsies.niceColor};
`;

const OutPut = styled.div`
  background-color: ${'white'};
  padding: 20px;
  border: 1px solid green;
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
        weight: '',
        facebook: '',
        instagram: '',
        snapchat: '',
        phoneNumber: '',
        zip: '',
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
               <p>Facebook: {this.state.formValues.facebook}</p>
               <p>Instagram: {this.state.formValues.instagram}</p>
               <p>Snapchat: {this.state.formValues.snapchat}</p>
               <p>Phone Number: {this.state.formValues.phoneNumber}</p>
               <p>Education: {this.state.formValues.education}</p>
        </OutPut>
        </div>
        <div className="test-bottom">
        <Filter />
        <ToDo />
        </div>
      
      </StyledApp>
     
    );
  }
}

export default App;
