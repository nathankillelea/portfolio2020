import React from 'react';
import styles from './EmmysDoodles.module.css';
import SharedStyles from '../SharedStyles.module.css';

const EmmysDoodles = () => {
  return (
    <div id={SharedStyles.container}>
      <div id={styles.body}>
        <h2 className={SharedStyles.projectHeader}>Emmy's Doodles</h2>
        <h3 className={SharedStyles.projectSubheader}>E-commerce website for goldendoodle stickers</h3>
      </div>
    </div>
  );
}

export default EmmysDoodles;
