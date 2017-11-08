import React, { Component } from 'react';
import router from '.././router';
import {Route, Switch, HashRouter} from 'react-router-dom';
import styled from 'styled-components';

const BodyContainer = styled.div `
  border: 1px solid black;
  height: 100%;
  width: 770px;
  margin-left: auto;
  margin-right: auto;
`

class Body extends Component {
  render() {
    return (
      <BodyContainer>
        { router }
      </BodyContainer>
    );
  }
}

export default Body;
