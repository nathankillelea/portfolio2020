import React, { Component } from 'react';
import Card from '../Card/Card.js';
import styles from './Home.module.css';
import SharedStyles from '../SharedStyles.module.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

class Home extends Component {
  render() {
    return (
      <div id={SharedStyles.container}>
        <div id={styles.body}>
          <section id={styles.subtitle}>
            <h1 id={styles.subtitleText}>Hey! I am Nathan. I am a software developer.</h1>
          </section>
          <section id={styles.projects} ref={(section) => { this.Projects = section;}}>
            <h1 id={styles.projectsText}>Projects</h1>
            <Card
              title={'Illini Events'}
              link={'/illini-events'}
              img={'../../assets/illini_events.jpg'}
              backgroundColor='#292929'
              description='Created a mobile app to help advertisers increase traffic to their events and to help students find events they may be interested in around campus.'
              tags={['JavaScript', 'React Native', 'Redux']}
            />
            <Card
              title={"Emmy's Doodles"}
              link={'/emmys-doodles'}
              img={'../../assets/emmys_doodles.jpg'}
              backgroundColor='#292929'
              description=''
              tags={['JavaScript', 'React', 'Redux', 'Firebase']}
            />
            <Card
              title={'Browser Game'}
              link={'/browser-game'}
              img={'../../assets/browser_game.jpg'}
              backgroundColor='#292929'
              description='Developed a survival/wave game with a friend in pure JavaScript; the goal of the game is to gain as many points as possible by defeating enemies and chaining combos. The intent of this project was to learn how to program a game. Since neither of us are artists, the visuals were drawn in GIMP and are placeholder.'
              tags={['JavaScript', 'HTML5', 'Canvas']}
            />
            <Card
              title={'Message in a Bottle'}
              link={'/message-in-a-bottle'}
              img={'../../assets/message_in_a_bottle.jpg'}
              backgroundColor='#292929'
              description='Created a mobile app with a group of five students. The app allows users to set goals, vent their frustrations throughout the process, and finally motivates users to complete these goals with motivational quotes. I worked on the front-end of this app with two other students.'
              tags={['JavaScript', 'React Native', 'Node.js', 'Express', 'MongoDB']}
            />
            <Card
              title={'Fanchat'}
              link={'/fanchat'}
              img={'../../assets/fanchat.jpg'}
              backgroundColor='#292929'
              description='WIP'
              tags={['Javascript', 'React Native Web', 'Firebase', 'Redux']}
            />
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
