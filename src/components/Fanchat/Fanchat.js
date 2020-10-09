import React from 'react';
import styles from './Fanchat.module.css';
import SharedStyles from '../SharedStyles.module.css';

const Fanchat = () => {
  return (
    <div id={SharedStyles.container}>
      <div id={styles.body}>
        <h2 className={SharedStyles.projectHeader}>Fanchat</h2>
        <h3 className={SharedStyles.projectSubheader}>Subscription-based chatting</h3>
      </div>
    </div>
  );
}

export default Fanchat;
