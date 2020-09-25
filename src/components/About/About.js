import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import styles from './About.module.css';
import SharedStyles from '../SharedStyles.module.css';

class About extends Component {
  render() {
    return (
      <div id={SharedStyles.container}>
        <div id={styles.body}>
          <div id={styles.headerContainer}>
            <img src='../../assets/nathan_killelea.jpg' id={styles.img} />
            <h1 id={styles.aboutContainer}>Hey, I'm Nathan Killelea.</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
