import React, { useState } from 'react';
import { Button } from './Button';
import  { getAuth,
        signInWithEmailAndPassword } from '@firebase/auth';
import './LoginAuth.css'
import { auth } from '../FirebaseConfig'

function LoginAuth() {
    //login 
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

        // eslint-disable-next-line
const auths = getAuth();
signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => { const user = userCredential.user
    // Signed in

    console.log(user.email)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
  });


  return (
    <div className='login-container'> 
            <input className='login-inputs' type='email' placeholder='Email' 
             onChange={(e) => 
                setLoginEmail(e.target.value)
            }/>

            <input className='login-inputs' type='password' placeholder='Password' 
             onChange={(e) => 
                setLoginPassword(e.target.value)
            } />
                <div className='signin'>
                <Button type={LoginAuth()}
                className='btns' 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'>
                LOGIN
                </Button>
                </div>

    </div>
  );
};

export default LoginAuth;