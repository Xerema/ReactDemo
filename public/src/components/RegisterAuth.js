import React, { useState } from 'react';
import { Button } from './Button';
import  { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import './RegisterAuth.css';
import { auth } from '../FirebaseConfig';

 // eslint-disable-next-line
function RegisterAuth() {
    //register ja login 
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    
const register = getAuth();
createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
  .then((userCredential) => {
    // Signed in 
    // eslint-disable-next-line
    console.log(userCredential.user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
    // ..
  }
);

  return (

    <div className='register-container'>

    <input type='text' className='register-input'
     placeholder='Email' onChange={(e) => {
        setRegisterEmail(e.target.value);
    }}/>

    <input type='password' className='register-input'
     placeholder='Password' onChange={(e) => {
        setRegisterPassword(e.target.value);
    }}/>
        <div className='signup-button'>
        <Button onClick={register}
        className='btns' 
        buttonStyle='btn--outline' 
        buttonSize='btn--large'>
        SIGN UP
        </Button>
        </div>
    </div>
  );
};

export default RegisterAuth;