import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import styles from './MessageInABottle.module.css';
import SharedStyles from '../SharedStyles.module.css';

class MessageInABottle extends Component {
  render() {
    return (
      <div id={SharedStyles.container}>
        <div id={styles.body}>
          <h2>Message In A Bottle</h2>
        </div>
      </div>
    );
  }
}

export default MessageInABottle;
