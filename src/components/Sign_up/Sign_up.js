import React, { Component } from 'react';
import { auth, createUserProfileDoc } from '../../firebase/firebase';
import Custom_button from '../Custom_button/Custom_button';
import Form_input from '../Form_input/Form_input';
import './Sign_up.scss';

export class Sign_up extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert('passwords dont match');
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDoc(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign_up">
        <h2 className="title">i do not have account</h2>
        <span>sign up with your email and account</span>
        <form className="sign_up_form" onSubmit={this.handleSubmit}>
          <Form_input
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />

          <Form_input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <Form_input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <Form_input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <Custom_button type="submit">SIGN UP</Custom_button>
        </form>
      </div>
    );
  }
}

export default Sign_up;
