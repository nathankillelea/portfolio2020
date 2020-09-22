import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import styles from './EmmysDoodles.module.css';
import SharedStyles from '../SharedStyles.module.css';

class EmmysDoodles extends Component {
  render() {
    return (
      <div id={SharedStyles.container}>
        <div id={styles.body}>
          <h2>Emmy's Doodles</h2>
        </div>
      </div>
    );
  }
}

export default EmmysDoodles;
