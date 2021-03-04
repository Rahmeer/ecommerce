import React, { Component } from 'react';

import Form_input from '../Form_input/Form_input';
import Custom_button from '../Custom_button/Custom_button';

import { signInWithGoogle } from '../../firebase/firebase';

import './Sign_In.scss';

export class Sign_In extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="Sign_In">
        <h2>I already have a account</h2>
        <span>sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <Form_input
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <Form_input
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <Custom_button type="submit">Sign in</Custom_button>
            <Custom_button onClick={signInWithGoogle} isGoogleSignin>
              google
            </Custom_button>
          </div>
        </form>
      </div>
    );
  }
}

export default Sign_In;
