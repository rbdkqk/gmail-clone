import React from 'react';
import './App.css';
import Header from './pages/header/Header';
import Body from './pages/body/Body';
import SendMail from './components/SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <div className='app'>
      <Header />
      <Body />
      {sendMessageIsOpen && <SendMail />}
    </div>
  );
}

export default App;
