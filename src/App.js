import './App.css';
import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignIn_signUp from './pages/signIn_signUp/SignIn_signUp';
import { auth, createUserProfileDoc } from './firebase/firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignIn_signUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
