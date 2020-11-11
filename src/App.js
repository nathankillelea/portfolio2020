import React, { useState } from 'react';
import {
  Switch,
  Route,
  Redirect,
  useLocation
} from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size'

import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import IlliniEvents from './components/IlliniEvents/IlliniEvents.js';
import EmmysDoodles from './components/EmmysDoodles/EmmysDoodles.js';
import ZombieSurvival from './components/ZombieSurvival/ZombieSurvival.js';
import MessageInABottle from './components/MessageInABottle/MessageInABottle.js';
import Fanchat from './components/Fanchat/Fanchat.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import ScrollToTop from './ScrollToTop.js';
import './App.css';

function App() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const width = useWindowWidth();

  return (
    <ScrollToTop>
      <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <Header open={open} setOpen={setOpen} width={width}/>
        <div style={{display: 'flex', flex: 1}}>
          <Switch location={location}>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About} />
            <Route path='/illini-events' component={IlliniEvents} />
            <Route path='/emmys-doodles' component={EmmysDoodles} />
            <Route path='/zombie-survival' component={ZombieSurvival} />
            <Route path='/message-in-a-bottle' component={MessageInABottle} />
            <Route path='/fanchat' component={Fanchat} />
            <Route render={() => <Redirect to={{pathname: "/"}} />} />
          </Switch>
        </div>
        <Footer />
      </div>
    </ScrollToTop>
  );
}

export default App;
