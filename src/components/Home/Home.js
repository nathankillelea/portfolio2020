import React from 'react';
import Card from '../Card/Card.js';
import styles from './Home.module.css';
import SharedStyles from '../SharedStyles.module.css';

const Home = () => {
  return (
    <div id={SharedStyles.container}>
      <div id={styles.body}>
        <section id={styles.subtitle}>
          <h1 id={styles.subtitleText}>Hey! I'm Nathan, software developer.</h1>
        </section>
        <section id={styles.projects}>
          <h1 id={styles.projectsText}>Projects</h1>
          <Card
            title={'Illini Events'}
            link={'/illini-events'}
            img={'../../assets/illini_events.jpg'}
            backgroundColor='rgba(229, 70, 31, 0.5)'
            description='College event finder'
            tags={['JavaScript', 'React Native', 'Redux']}
            alt={'Illini Events Design'}
          />
          <Card
            title={"Emmy's Doodles"}
            link={'/emmys-doodles'}
            img={'../../assets/emmys_doodles.jpg'}
            backgroundColor='rgba(244, 219, 155, 0.5)'
            description='E-commerce website for goldendoodle stickers'
            tags={['JavaScript', 'React', 'Redux', 'Firebase']}
            alt={"Emmy's Doodles Graphic"}
          />
          <Card
            title={'Fanchat'}
            link={'/fanchat'}
            img={'../../assets/fanchat.jpg'}
            backgroundColor='rgba(255, 32, 32, 0.5)'
            description='Subscription-based chatting'
            tags={['Javascript', 'React Native Web', 'Firebase', 'Redux']}
            alt={'Fanchat App'}
          />
          <Card
            title={'Message in a Bottle'}
            link={'/message-in-a-bottle'}
            img={'../../assets/message_in_a_bottle.jpg'}
            backgroundColor='rgba(150, 206, 180, 0.5)'
            description='Motivational task management'
            tags={['JavaScript', 'React Native', 'Node.js', 'Express', 'MongoDB']}
            alt={'Message in a Bottle Logo'}
          />
          <Card
            title={'Zombie Survival'}
            link={'/zombie-survival'}
            img={'../../assets/browser_game.jpg'}
            backgroundColor='rgba(150, 191, 206, 0.5)'
            description='Browser-based survival game'
            tags={['JavaScript', 'HTML5', 'Canvas']}
            alt={'Hand on keyboard'}
          />
        </section>
      </div>
    </div>
  );
}

export default Home;
