import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth, provider } from '../../firebase';
import './Login.css';

export default function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) =>
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        )
      )
      .catch((err) => alert(err.message));
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://images.macrumors.com/t/tOeSavAWwmT_Nsa7e67NCK_J-FA=/400x0/filters:quality(90)/article-new/2020/10/newgmaillogo.0.jpg?lossy'
          alt=''
        />
        <Button
          variant='contained'
          color='primary'
          className='login__loginButton'
          onClick={signIn}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
