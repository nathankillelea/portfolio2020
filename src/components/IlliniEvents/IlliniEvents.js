import React, { useState } from 'react';
import styles from './IlliniEvents.module.css';
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

// BLUE: bdcddf - 667388
// PINK: dfbddc - 886685
// YELO: ded82c - 87841b
const IlliniEvents = () => {
  return (
    <div id={SharedStyles.container}>
      <div id={styles.body}>
        <div id={styles.infoContainer}>
          <h2 className={SharedStyles.projectHeader}>Illini Events</h2>
          <h3 className={SharedStyles.projectSubheader}>College event finder</h3>
          <h3>Introduction</h3>
          <p>blahblah illini events is blah blah</p>
          <h3>Tech: React Native, Redux</h3>
        </div>
        <div className={styles.imageRow}>
          <Image src='../../assets/illini_events_1.png' src2='../../assets/illini_events_1_color.png' />
          <div className={styles.spacer} />
          <Image src='../../assets/illini_events_2.png' src2='../../assets/illini_events_2_color.png' />
          <div className={styles.spacer} />
          <Image src='../../assets/illini_events_3.png' src2='../../assets/illini_events_3_color.png' />
        </div>
        <div className={styles.imageRow}>
          <Image src='../../assets/illini_events_4.png' src2='../../assets/illini_events_4_color.png' />
          <div className={styles.spacer} />
          <Image src='../../assets/illini_events_5.png' src2='../../assets/illini_events_5_color.png' />
          <div className={styles.spacer} />
          <Image src='../../assets/illini_events_6.png' src2='../../assets/illini_events_6_color.png' />
        </div>
        <div className={styles.imageRow}>
          <Image src='../../assets/illini_events_7.png' src2='../../assets/illini_events_7_color.png' />
          <div className={styles.spacer} />
          <Image src='../../assets/illini_events_8.png' src2='../../assets/illini_events_8_color.png' />
          <div className={styles.spacer} />
          <Image src='../../assets/illini_events_9.png' src2='../../assets/illini_events_9_color.png' />
        </div>
      </div>
    </div>
  );
}

export default IlliniEvents;
