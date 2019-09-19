import React from 'react';
import './login.css';
import Button from '../Button/button';
import Input from '../Input/input';
import Label from '../Label/label';
import A from '../A/a';

const LoginForm = props =>{
  return(
    <form class="login-form">
    <Label value="Login"/>
    
    <Input  placeholder="username"/>
    <Input type="password" placeholder="password"/>
    <A value="Forgot password?" href="reset-password"/>
    
    <Button value="Login" />
    <A value="Create new account" href="reset-password"/>

    </form>
  )
}

export default LoginForm; 