import React from 'react';
import './SignIn_signUp.scss';
import Sign_In from '../../components/SignIn/Sign_In';
import Sign_up from '../../components/Sign_up/Sign_up';
const SignIn_signUp = () => {
  return (
    <div className="signIn_signUp">
      <Sign_In />
      <Sign_up />
    </div>
  );
};

export default SignIn_signUp;
