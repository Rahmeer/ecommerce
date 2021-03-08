import React from 'react';
import './Custom_button.scss';

const Custom_button = ({
  children,
  isGoogleSignin,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignin ? 'google_sign_in' : ''
      } Custom_button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Custom_button;
