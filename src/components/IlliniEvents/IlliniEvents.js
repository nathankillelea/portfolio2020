import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import styles from './IlliniEvents.module.css';
import SharedStyles from '../SharedStyles.module.css';

class IlliniEvents extends Component {
  render() {
    return (
      <div id={SharedStyles.container}>
        <div id={styles.body}>
          <h2>Illini Events</h2>
        </div>
      </div>
    );
  }
}

export default IlliniEvents;
