import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from './components/Home/Home.js';
import Projects from './components/Projects/Projects.js';
import About from './components/About/About.js';
import IlliniEvents from './components/IlliniEvents/IlliniEvents.js';
import EmmysDoodles from './components/EmmysDoodles/EmmysDoodles.js';
import BrowserGame from './components/BrowserGame/BrowserGame.js';
import MessageInABottle from './components/MessageInABottle/MessageInABottle.js';
import Fanchat from './components/Fanchat/Fanchat.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={About} />
          <Route path='/illini-events' component={IlliniEvents} />
          <Route path='/emmys-doodles' component={EmmysDoodles} />
          <Route path='/browser-game' component={BrowserGame} />
          <Route path='/message-in-a-bottle' component={MessageInABottle} />
          <Route path='/fanchat' component={Fanchat} />
          <Route render={() => <Redirect to={{pathname: "/"}} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
