import React, { Component } from 'react';
import './App.css';
import Body from './components/Body';
import styled from 'styled-components';
import router from './router';


const StyledApp = styled.div`
  background-color: ${propsies => propsies.niceColor};
`;

const OutPut = styled.div`
  background-color: ${'white'};
`


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      formValues: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        birthday: '',
        age: '',
        gender: '',
        color: '',
        city: '',
        usaState: ''
      },
    }
    this.updateFormState = this.updateFormState.bind(this);
  }

  updateFormState(newValues){
    this.setState({formValues: newValues});
  }


  render() {
    console.log(this.state)
    return (
      <StyledApp niceColor={this.state.formValues.color || 'white'} className="App">
        <Body updateFormState={this.updateFormState} formValues={this.state.formValues}/>
        <OutPut>
              <h1>Output</h1>
               <p>Gender:{this.state.formValues.gender}</p>
               <p>Age:</p>
               <p>Birthday: {this.state.formValues.birthday}</p>
               <p>Color: {this.state.formValues.color} </p>
               <p>Height: </p>
               <p>Weight: </p> 
        </OutPut>
      </StyledApp>
    );
  }
}

export default App;
