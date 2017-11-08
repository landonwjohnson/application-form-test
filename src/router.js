import React from 'react';
import Page1 from './components/content/Page1';
import PageLast from './components/content/PageLast';
import ContactInfo from './components/content/ContactInfo';
import ThankYou from './components/content/ThankYou';
import Stats from './components/Stats';



import { HashRouter , Route } from 'react-router-dom';

export default (
    <HashRouter>
      <div>  

        <Route component={Page1} path= '/' exact />
        <Route component={ ContactInfo }  path='/contact-info' exact />
        <Route component={ ThankYou }  path='/finished' exact />
        <Route component={ Stats }  path='/stats' exact />
        <Route component={ PageLast }  path='/pagelast' exact />

      </div>
  </HashRouter>
)