import React, { Component } from 'react';
import './App.css';
import Body from './components/Body';
import styled from 'styled-components';


const StyledApp = styled.div`
  background-color: ${propsies => propsies.niceColor};
  padding: 20px;
`;


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      formValues: {
        firstName: 'Gabe',
        lastName: '',
        phoneNumber: '',
        birthday: '',
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

        <div className="output">
              <h1>Output</h1>
               <p>Gender:{this.state.formValues.gender}</p>
               <p>Birthday: {this.state.formValues.birthday} </p>
              <div className="color-output" style={{"background":`${this.state.formValues.color}`}}>
              <p>{this.state.formValues.color} </p>
              </div>
        </div>
      </StyledApp>
    );
  }
}

export default App;
