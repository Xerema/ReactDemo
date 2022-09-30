import React from 'react'
import { getAuth, signOut } from '@firebase/auth';
import './LogoutAuth.css'

function LogoutAuth() {

    const logOut = getAuth();
    signOut(logOut).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });

  return (
    <div className='logout-container'>
    <Button onClick={logOut}
        className='btns' 
        buttonStyle='btn--outline' 
        buttonSize='btn--large'>
        LOG OUT
        </Button>
    </div>
  )
}

export default LogoutAuth;