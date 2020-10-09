import React from 'react';
import styles from './BrowserGame.module.css';
import SharedStyles from '../SharedStyles.module.css';

const BrowserGame = () => {
  return (
    <div id={SharedStyles.container}>
      <div id={styles.body}>
        <h2 className={SharedStyles.projectHeader}>Browser Game</h2>
        <h3 className={SharedStyles.projectSubheader}>Browser-based survival game</h3>
      </div>
    </div>
  );
}

export default BrowserGame;
