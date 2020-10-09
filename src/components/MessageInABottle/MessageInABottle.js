import React, { useState } from 'react';
import styles from './MessageInABottle.module.css';
import SharedStyles from '../SharedStyles.module.css';

const Image = (props) => {
  const [pressed, setPressed] = useState(false);

  return (
    <div className={styles.imageContainer}>
      <img
        className={!pressed ? styles.image : styles.imageHidden}
        src={props.src}
        onClick={() => setPressed(true)}
        alt={''}
      />
      <img
        className={pressed ? styles.hiddenImageVisible : styles.hiddenImage}
        src={props.src2}
        onClick={() => setPressed(false)}
        alt={''}
      />
    </div>
  );
}

const MessageInABottle = () => {
  return (
    <div id={SharedStyles.container}>
      <div id={styles.body}>
        <div id={styles.infoContainer}>
          <h2 className={SharedStyles.projectHeader}>Message in a Bottle</h2>
          <h3 className={SharedStyles.projectSubheader}>Motivational task tracker</h3>
          <h3>Introduction</h3>
          <p>blahblah message in a bottle is blah blah</p>
          <h3>Tech: MongoDB, Express, React Native, Node</h3>
        </div>
        <div className={styles.imageRow}>
          <Image src='../../assets/message_in_a_bottle_1.png' src2='../../assets/message_in_a_bottle_1_color.png' />
          <div className={styles.spacer} />
          <Image src='../../assets/message_in_a_bottle_2.png' src2='../../assets/message_in_a_bottle_2_color.png' />
          <div className={styles.spacer} />
          <Image src='../../assets/message_in_a_bottle_3.png' src2='../../assets/message_in_a_bottle_3_color.png' />
        </div>
      </div>
    </div>
  );
}

export default MessageInABottle;
