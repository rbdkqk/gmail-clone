import React, { useEffect } from 'react';
import './App.css';
import Header from './pages/header/Header';
import Body from './pages/body/Body';
import SendMail from './components/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './pages/login/Login';
import { auth } from './firebase';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      } else {
      }
    });
  }, []);

  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <Body />
          {sendMessageIsOpen && <SendMail />}
        </>
      )}
    </div>
  );
}

export default App;
