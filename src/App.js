import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import styled from 'styled-components';
import router from './router';
import moment from 'moment';
import Body from './components/Body';
import Header from './components/Header';
import Resume from './components/Resume';



const StyledApp = styled.div`
  background: ${propsies => propsies.niceColor}, opacity 0.5;
`;

const InputField = styled.div`
background: ${propsies => propsies.fieldColor} || '#353535'}
`;



let now = moment();


class App extends Component {
  
  constructor(){
    super()
    this.state = {
      firstName: '',
      lastName: '',
      education: '',
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
      smokes: '',
      drinks: '',
      bmi: '',
      picture: '' 
    }

    this.handleChangeZip = this.handleChangeZip.bind(this);
    this.handleChangeGenderType = this.handleChangeGenderType.bind(this);
    this.handleChangeColorType = this.handleChangeColorType.bind(this);
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
    this.handleChangeBirthday = this.handleChangeBirthday.bind(this);
  }

   
    

  handleChangeGenderType(event) {
    this.setState({gender: event.target.value});
  }

  handleChangeZip(event) {
    this.setState({zip: event.target.value});
  }

  handleChangeColorType(event) {
    this.setState({color: event.target.value});
  }

  handleChangePhoneNumber(event) {
    this.setState({phoneNumber: event.target.value});
  }

  handleChangeBirthday(event) {
    this.setState({birthday: event.target.value});
  }



  




  render() {
    console.log(this.state)
    return (
      
      <StyledApp niceColor={this.props.color || 'white'} className="App">
        <Header color={this.state.color}/>
        <Body />
        <Resume />
        
      </StyledApp>
     
    );
  }
}


function mapStateToProps(state){
  return state;
}
export default connect( mapStateToProps ) (App)