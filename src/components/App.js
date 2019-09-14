import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from '../logo.svg';
import './App.css';

import Maps from "./Maps";
import Header from "./Header";
import Profile from "./Profile";
import Account from "./Account";
import SignUp from "./signup";
import SignIn from "./SignIn";
import Logout from './logout';

function App(){
  
  let isLoggedin = () => {
    const path = window.location.pathname;

    if(path === '/signup' || path === '/signin' || path === "/logout"){
      return false;
    } else { return true }
    }

  return (
      <Router>
          {(!isLoggedin()) ? (
            <div>
          <div className="container-wrapper headerless">
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" component={SignIn} />
                <Route path="/logout" component={Logout} />
              </div>
            </div>
            ):(
            <div>
                <Header/>
                <div className="container-wrapper">
                        <Route exact path="/" component={Maps} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/account" component={Account} />
                </div>
            </div>
              )}
      </Router>
  );
}

export default App;
