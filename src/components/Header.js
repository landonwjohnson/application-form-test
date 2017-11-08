import React, { Component } from 'react';
import router from '.././router';
import {Route, Switch, HashRouter} from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
background: ${propsies => propsies.navColor};
height: 50px;
`


class Header extends Component {
  render() {
    return (
      <HeaderContainer navColor={this.props.color || 'slategrey'} >
        <ul className="nav">
            <Link to="/"><li>Form Application</li></Link>
            <li>Sign in with Facebook</li>
        </ul>
      </HeaderContainer>
    );
  }
}

function mapStateToProps(state){
    return state;
  }
  export default connect( mapStateToProps ) (Header)