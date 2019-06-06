import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';


import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
