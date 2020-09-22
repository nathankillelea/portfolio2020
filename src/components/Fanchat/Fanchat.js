import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import styles from './Fanchat.module.css';
import SharedStyles from '../SharedStyles.module.css';

class Fanchat extends Component {
  render() {
    return (
      <div id={SharedStyles.container}>
        <div id={styles.body}>
          <h2>Fanchat</h2>
        </div>
      </div>
    );
  }
}

export default Fanchat;
