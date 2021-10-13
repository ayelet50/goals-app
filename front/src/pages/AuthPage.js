import React, { useState } from 'react';
import Login from '../components/authentication/Login';
import Register from '../components/authentication/Register';
import { Button } from '@material-ui/core';

const AuthPage = () => {
  const [isLoginPage, setIsLoginPage] = useState(false);

  const onChangedLoginRegisterPage = () => {
    setIsLoginPage(!isLoginPage);
  };

  return (
    <div>
      {isLoginPage ? <Login /> : <Register onRegistred={onChangedLoginRegisterPage}/>}
      <Button onClick={onChangedLoginRegisterPage}>{isLoginPage ? 'Don`t have an account? Sign up' : 'Already have an account? Sign in'}</Button>
    </div>
  );
};

export default AuthPage;