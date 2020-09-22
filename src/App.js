import React, { useRef } from 'react';
import {
  Switch,
  Route,
  Redirect,
  useLocation
} from 'react-router-dom';
import { animated, useSpring, useTransition, useChain } from 'react-spring';

import Home from './components/Home/Home.js';
import Projects from './components/Projects/Projects.js';
import About from './components/About/About.js';
import IlliniEvents from './components/IlliniEvents/IlliniEvents.js';
import EmmysDoodles from './components/EmmysDoodles/EmmysDoodles.js';
import BrowserGame from './components/BrowserGame/BrowserGame.js';
import MessageInABottle from './components/MessageInABottle/MessageInABottle.js';
import Fanchat from './components/Fanchat/Fanchat.js';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

import './App.css';

function App() {
  const location = useLocation();

  /*
  const springRef = useRef();
  const props = useSpring({
    ref: springRef,
    from: { },
    to: {},
  });
  */

  // need to have this somehow transition to like a single color screen, then transiton from that to the route, also scroll up to top of page before u actually change route?
  //const transitionRef = useRef();
  const transitions = useTransition(location, location => location.pathname, {
    /*ref: transitionRef,*/
    initial: null,
    from: {transform: 'translate3d(100%,0,0)'},
    enter: {transform: 'translate3d(0%,0,0)'},
    leave: {transform: 'translate3d(-100%,0,0)'},
  });

  //useChain([springRef, transitionRef], [0, 0])

  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header />
      <div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
      {
        transitions.map(({ item: location, props, key }) => (
          <animated.div style={props} key={key}>
            <Switch location={location}>
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
          </animated.div>
        ))
      }
      </div>
      <Footer />
    </div>
  );
}

export default App;
