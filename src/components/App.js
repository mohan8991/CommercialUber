import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import logo from '../logo.svg';
// import './App.css';

import Maps from "./Maps";
import Header from "./Header";

function App(){
  return (
      <Router>
          <div>
              <Header/>
              <Route exact path="/" component={Maps} />
              {/*<Route path="/profile" component={About} />*/}
          </div>
      </Router>
  );
}

export default App;
