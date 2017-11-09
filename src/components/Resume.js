import React, { Component } from 'react';
import router from '.././router';
import {Route, Switch, HashRouter} from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';


const OutPut = styled.div`
display: flex;
justify-content: space-around;
position: relative;
background-color: ${'white'};
border: 1px solid green;
width: 770px;
margin-left: auto;
margin-right: auto;
`
class Resume extends Component {
  render() {
    return (
      <OutPut>
        <div>
        <p>First Name:<b>{this.props.firstName}</b></p>
        <p>Last Name:<b>{this.props.lastName}</b></p>
        <p>Gender:<b>{this.props.gender}</b></p>
        <p>Color:<b>{this.props.color}</b></p>
        <p>Birthday:<b>{this.props.birthday}</b></p>
        <p>Phone:<b>{this.props.phoneNumber}</b></p>
        <p>Age:<b>{this.props.age}</b></p>
        </div>
        <div>
        <p>State:<b>{this.props.usaState}</b></p>
        <p>Weight:<b>{this.props.weight}</b></p>
        <p>Height: <b>{this.props.height}</b></p>
        <p>City:<b>{this.props.city}</b></p>
        <p>Education:<b>{this.props.education}</b></p>
        </div>
        <div>
        <p>Facebook:<b>{this.props.facebook}</b></p>
        <p>Instagram:<b>{this.props.instagram}</b></p>
        <p>Snapchat:<b>{this.props.snapchat}</b></p>
        <p>Twitter:<b>{this.props.twitter}</b></p>
        </div>
        <div>
        <p>Smokes:<b>{this.props.smokes}</b></p>
        <p>Drinks:<b>{this.props.drinks}</b></p>
        </div>
      </OutPut>
    );
  }
}

function mapStateToProps(state){
    return state;
  }
  export default connect( mapStateToProps ) (Resume)