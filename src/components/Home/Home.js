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
              backgroundColor='rgba(229, 70, 31, 0.5)'
              description='College event finder'
              tags={['JavaScript', 'React Native', 'Redux']}
            />
            <Card
              title={"Emmy's Doodles"}
              link={'/emmys-doodles'}
              img={'../../assets/emmys_doodles.jpg'}
              backgroundColor='rgba(244, 219, 155, 0.5)'
              description='E-commerce website for goldendoodle stickers'
              tags={['JavaScript', 'React', 'Redux', 'Firebase']}
            />
            <Card
              title={'Browser Game'}
              link={'/browser-game'}
              img={'../../assets/browser_game.jpg'}
              backgroundColor='rgba(150, 191, 206, 0.5)'
              description='Browser-based survival game'
              tags={['JavaScript', 'HTML5', 'Canvas']}
            />
            <Card
              title={'Message in a Bottle'}
              link={'/message-in-a-bottle'}
              img={'../../assets/message_in_a_bottle.jpg'}
              backgroundColor='rgba(150, 206, 180, 0.5)'
              description='Motivational task management'
              tags={['JavaScript', 'React Native', 'Node.js', 'Express', 'MongoDB']}
            />
            <Card
              title={'Fanchat'}
              link={'/fanchat'}
              img={'../../assets/fanchat.jpg'}
              backgroundColor='rgba(255, 32, 32, 0.5)'
              description='Subscription-based chatting'
              tags={['Javascript', 'React Native Web', 'Firebase', 'Redux']}
            />
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
