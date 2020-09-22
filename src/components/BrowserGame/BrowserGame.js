import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import styles from './BrowserGame.module.css';
import SharedStyles from '../SharedStyles.module.css';

class BrowserGame extends Component {
  render() {
    return (
      <div id={SharedStyles.container}>
        <div id={styles.body}>
          <h2>Browser Game</h2>
        </div>
      </div>
    );
  }
}

export default BrowserGame;
