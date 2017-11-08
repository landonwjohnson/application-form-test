import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import styled from 'styled-components';
import router from './router';
import moment from 'moment';
import Body from './components/Body';
import Header from './components/Header';



const StyledApp = styled.div`
  background: ${propsies => propsies.niceColor}, opacity 0.5;
`;

const OutPut = styled.div`
  display: block;
  position: relative;
  background-color: ${'white'};
  border: 1px solid green;
  width: 770px;
  margin-left: auto;
  margin-right: auto;
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
        education: '',
        age: '',
        gender: '',
        color: '',
        city: '',
        usaState: '',
        height: '',
        weight: '',
        facebook: '',
        instagram: '',
        snapchat: '',
        phoneNumber: '',
        zip: '',
        bmi: '',
    }
    this.handleChangeGenderType = this.handleChangeGenderType.bind(this);
    this.handleChangeColorType = this.handleChangeColorType.bind(this);
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
    this.handleChangeBirthday = this.handleChangeBirthday.bind(this);
    
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

  handleChangeBirthday(event) {
    this.setState({birthday: event.target.value});
  }



  




  render() {
    console.log(this.state)
    return (
      
      <StyledApp niceColor={this.props.color || 'white'} className="App">
        <Header color={this.state.color}/>
        <Body />
        <OutPut>
        <h1>Output</h1>
        <p>Gender:<b>{this.props.gender}</b></p>
        <p>Color:<b>{this.props.color}</b></p>
        <p>Birthday:<b>{this.props.birthday}</b></p>
        <p>Phone:<b>{this.props.phoneNumber}</b></p>
        <p>Age:<b>{this.props.age}</b></p>
        <p>State:<b>{this.props.usaState}</b></p>
        <p>Work:</p>
        <p>Salary:</p>
        <p>About:</p>
        <p>Why You:</p>
        <p>Hobbies:</p>
        <p>Weight:</p>
        <p>Height:</p>
        <p>City:<b>{this.props.city}</b></p>
        <p>Education:<b>{this.props.education}</b></p>
        <p>Facebook:<b>{this.props.facebook}</b></p>
        <p>Instagram:<b>{this.props.instagram}</b></p>
        <p>Snapchat:<b>{this.props.snapchat}</b></p>
        <p>Twitter:<b>{this.props.twitter}</b></p>
        </OutPut>
        
      </StyledApp>
     
    );
  }
}


function mapStateToProps(state){
  return state;
}
export default connect( mapStateToProps ) (App)