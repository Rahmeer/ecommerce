import React from 'react';
import './Custom_button.scss';

const Custom_button = ({ children, isGoogleSignin, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignin ? 'google_sign_in' : ''} Custom_button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Custom_button;
