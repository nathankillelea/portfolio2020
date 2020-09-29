import React, { useState, useRef } from 'react';
import {
  Switch,
  Route,
  Redirect,
  useLocation
} from 'react-router-dom';
import { animated, useSpring, useTransition, useChain } from 'react-spring';
import { useWindowWidth } from '@react-hook/window-size'

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

import SharedStyles from './components/SharedStyles.module.css';

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

  const props = useSpring({
    from: {position: 'fixed', top: 0, left: 0, width: '0%', height: '100%', backgroundColor: 'blue', zIndex: 2},
    to: {position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'blue', zIndex: 2}
  })

  // need to have this somehow transition to like a single color screen, then transiton from that to the route, also scroll up to top of page before u actually change route?
  //const transitionRef = useRef();
  const transitions = useTransition(location, location => location.pathname, {
    initial: null,
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
  });

  // maybe make a hidden fullscreen page that is visible during transition? or something like that

  //useChain([springRef, transitionRef], [0, 0])
  //visibility: 'hidden', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'blue', zIndex: 2

  const content = useRef();
  const [open, setOpen] = useState(false);
  const [burgerHeight, setHeight] = useState(0);
  console.log('height', burgerHeight);
  const width = useWindowWidth();
  console.log('width', width);

  if(width <= 600 && burgerHeight === 0) {
    return (
      <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}} ref={content}>
        <Header content={content} open={open} setOpen={setOpen} burgerHeight={burgerHeight} setHeight={setHeight} width={width}/>
      </div>
    )
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}} ref={content}>
      <Header content={content} open={open} setOpen={setOpen} burgerHeight={burgerHeight} setHeight={setHeight} width={width}/>
      <div style={{flex: 1}}>
        <Switch location={location}>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/illini-events' component={IlliniEvents} />
          <Route path='/emmys-doodles' component={EmmysDoodles} />
          <Route path='/browser-game' component={BrowserGame} />
          <Route path='/message-in-a-bottle' component={MessageInABottle} />
          <Route path='/fanchat' component={Fanchat} />
          <Route render={() => <Redirect to={{pathname: "/"}} />} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
