import React from 'react';
import './App.css';
import Header from './pages/header/Header';
import Sidebar from './pages/sidebar/Sidebar';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <div className='app__body'>
          <Sidebar />
          <Switch>
            {/* <Route path='/mail' conponent={Mail} /> */}
            {/* <Route path='/' conponent={EmailList} />  */}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
