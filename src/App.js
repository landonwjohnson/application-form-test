import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
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
  
  constructor(){
    super()
    this.state = {
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
        zip: ''
    }
    this.handleChangeGenderType = this.handleChangeGenderType.bind(this);
    this.handleChangeColorType = this.handleChangeColorType.bind(this);
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
    
  }

   
    

  handleChangeGenderType(event) {
    this.setState({gender: event.target.value});
  }

  handleChangeColorType(event) {
    this.setState({color: event.target.value});
  }

  handleChangePhoneNumber(event) {
    this.setState({phoneNumber: event.target.value});
  }



  




  render() {
    console.log(this.state)
    return (
      <StyledApp niceColor={this.state.color || 'white'} className="App">
        <div className="test-top">
       { router }
        </div>
      
      </StyledApp>
     
    );
  }
}


function mapStateToProps(state){
  return state;
}
export default connect( mapStateToProps ) (App)