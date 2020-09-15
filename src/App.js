import React, { Component } from 'react';
import Card from './Card.js';
import './App.css';
import scrollToComponent from 'react-scroll-to-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';


class App extends Component {
  render() {
    return (
      <div id='app'>
        <header>
          <div id='title'>
            <p>Nathan Killelea</p>
          </div>
          <nav>
            <ul>
              <li className='nav-item-margin-right'><p className='nav-text' onClick={() => scrollToComponent(this.Projects, {offset: -102, align: 'top', duration: 750})}>Projects</p></li>
              <li className='nav-item'><p className='nav-text' onClick={() => scrollToComponent(this.Contact, {offset: 0, align: 'top', duration: 1500})}>Contact</p></li>
            </ul>
          </nav>
        </header>
        <hr />
        <section id='subtitle'>
          <h1>Hey! I am Nathan. I am a software developer with a preference for front-end development.</h1>
        </section>
        <section id='projects' ref={(section) => { this.Projects = section;}}>
          <h1 id='projects-text'>Projects</h1>
          <Card
            title={'Illini Events'}
            img={require('./assets/illini_events.png')}
            backgroundColor='#292929'
            description='Created a mobile app to help advertisers increase traffic to their events and to help students find events they may be interested in around campus.'
            tags={['JavaScript', 'React Native', 'Redux']}
            sourceLink='https://github.com/nathankillelea/CS468-Event-App'
          />
          <Card
            title={"Emmy's Doodles"}
            img={require('./assets/illini_events.png')}
            backgroundColor='#292929'
            description=''
            tags={['JavaScript', 'React', 'Redux', 'Firebase']}
            sourceLink=''
          />
          <Card
            title={'JavaScript Game'}
            img={require('./assets/javascript_game.png')}
            backgroundColor='#292929'
            description='Developed a survival/wave game with a friend in pure JavaScript; the goal of the game is to gain as many points as possible by defeating enemies and chaining combos. The intent of this project was to learn how to program a game. Since neither of us are artists, the visuals were drawn in GIMP and are placeholder.'
            tags={['JavaScript', 'HTML5', 'Canvas']}
            sourceLink='https://github.com/nathankillelea/CS242-Final-Project'
          />
          <Card
            title={'Message in a Bottle'}
            img={require('./assets/message_in_a_bottle.png')}
            backgroundColor='#292929'
            description='Created a mobile app with a group of five students. The app allows users to set goals, vent their frustrations throughout the process, and finally motivates users to complete these goals with motivational quotes. I worked on the front-end of this app with two other students.'
            tags={['JavaScript', 'React Native', 'Node.js', 'Express', 'MongoDB']}
            sourceLink='https://github.com/nathankillelea/CS498RK-Final-Project'
          />
          <Card
            title={'Fanchat'}
            img={require('./assets/illini_events.png')}
            backgroundColor='#292929'
            description='WIP'
            tags={['Javascript', 'React Native Web', 'Firebase', 'Redux']}
            sourceLink=''
          />
        </section>
        <section id='about'>
          <section className='about-section' id='education'>
            <h1 className='about-title'>Education</h1>
            <ul>
              <div className='about-item-margin-bottom'>
                <li><p className='years'>2014 - 2016</p></li>
                <li><p>A.E.S. / IVCC</p></li>
              </div>
              <div className='about-item'>
                <li><p className='years'>2016 - 2018</p></li>
                <li><p>B.S. Computer Science / UIUC</p></li>
              </div>
            </ul>
          </section>
          <section className='about-section-margin-top' id='work'>
            <div>
              <h1 className='about-title'>Work</h1>
              <ul>
                <div className='about-item'>
                  <li><p className='years'>2018 - 2019</p></li>
                  <li><p>Epic Systems</p></li>
                </div>
              </ul>
            </div>
          </section>
          <section className='about-section-margin-top' id='contact'>
            <div>
              <h1 className='about-title'>Contact</h1>
              <ul id='contact-group'>
                <li><a href='https://github.com/nathankillelea' target='_blank' rel='noopener noreferrer' className='icon-bubble margin-right'><FontAwesomeIcon className='icon' icon={faGithubAlt} /></a></li>
                <li><a href='https://www.linkedin.com/in/killelea/' target='_blank' rel='noopener noreferrer' className='icon-bubble margin-right'><FontAwesomeIcon className='icon' icon={faLinkedinIn} /></a></li>
                <li><a href='mailto:nathan.killelea@gmail.com' className='icon-bubble margin-right'><FontAwesomeIcon className='icon' icon={faEnvelope} /></a></li>
                <li><a href='' className='icon-bubble'><FontAwesomeIcon className='icon' icon={faFileAlt} /></a></li>
              </ul>
            </div>
          </section>
        </section>
        <section id='contact-old' ref={(section) => {this.Contact = section;}}>
          <h1 id='contact-text'>Contact me!</h1>
        </section>
      </div>
    );
  }
}

export default App;
