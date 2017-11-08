import React from 'react';
import Page1 from './components/content/Page1';
import ContactInfo from './components/content/ContactInfo';



import { HashRouter , Route } from 'react-router-dom';

export default (
    <HashRouter>
      <div>  

        <Route component={Page1} path= '/' exact />
        <Route component={ ContactInfo }  path='/contact-info' exact />

      </div>
  </HashRouter>
)