import React from 'react';
import Login from './components/content/Login';
import Basics from './components/content/Basics';
import ContactInfo from './components/content/ContactInfo';
import ThankYou from './components/content/ThankYou';
import Stats from './components/Stats';
import Career from './components/content/Career';
import LifeStyle from './components/content/LifeStyle';



import { HashRouter , Route } from 'react-router-dom';

export default (
    <HashRouter>
      <div>  
        <Route component={ Login } path= '/' exact />
        <Route component={ Basics } path= '/page/1/' exact />
        <Route component={ ContactInfo }  path='/page/2' exact />
        <Route component={ LifeStyle }  path='/page/3' exact />
        <Route component={ Career }  path='/page/4' exact />
        <Route component={ ThankYou }  path='/finished' exact />
        <Route component={ Stats }  path='/stats' exact />
      </div>
  </HashRouter>
)