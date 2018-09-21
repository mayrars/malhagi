import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase, { provider } from "./../config/Firebase";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isLogged: false
    };
  }
  componentWillMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user: user, isLogged: true });
    });
  };
  logIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log(`Sesión iniciada`);
      })
      .catch(err => {
        console.log(err.message);
      });
  };
  logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(result => {
        console.log(`Ha finalizado`);
        this.setState({ user: null, isLogged: false });
      });
  };
  renderButton = () => {
    if (this.state.user) {
      return (
        <button type="button" className="btn btn-info" onClick={this.logOut}>
          LogOut
        </button>
      );
    } else {
      return (
        <button type="button" className="btn btn-info" onClick={this.logIn}>
          LogIn
        </button>
      );
    }
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Logo
          </Link>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          />
          {this.renderButton()}
        </div>
      </nav>
    );
  }
}

export default Header;
