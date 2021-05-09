import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './Body.css';
import Sidebar from '../sidebar/Sidebar';
import EmailList from './email-list/EmailList';
import Mail from './mail/Mail';

export default function Body() {
  return (
    <BrowserRouter>
      <div className='app__body'>
        <Sidebar />
        <Switch>
          <Route path='/mail' component={Mail} />
          <Route path='/' component={EmailList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
