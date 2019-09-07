import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import logo from '../logo.svg';
import './App.css';

import Maps from "./Maps";
import Header from "./Header";
import Profile from "./Profile";
import Account from "./Account";

function App(){
  return (
      <Router>
          <div>
              <Header/>
              <div className="container-wrapper">
                  <main className='container'>
                    <Route exact path="/" component={Maps} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/account" component={Account} />
                  </main>
              </div>
          </div>
      </Router>
  );
}

export default App;
