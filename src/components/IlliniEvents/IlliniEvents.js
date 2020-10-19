import React, { useState } from 'react';
import styles from './IlliniEvents.module.css';
import SharedStyles from '../SharedStyles.module.css';

import ProjectsNav from '../ProjectsNav/ProjectsNav.js';

const Image = (props) => {
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        src={props.src}
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
        <section id={SharedStyles.projectInfoContainer}>
          <h2 className={SharedStyles.projectHeader}>Illini Events</h2>
          <h3 className={SharedStyles.projectSubheader}>Illini Events was a project created by a team of 5 UIUC students for Tech and Advertising Campaigns. The aim of the project was to help increase the visibility of low attendance campus events. If students attend an event and check in, they would receive points to unlock special rewards, such as a discount on a concert ticket.</h3>
          <ul id={SharedStyles.projectTagsContainer}>
            <li className={`${SharedStyles.projectTag} ${SharedStyles.projectTagLeft}`}>
              <strong style={{color: 'rgba(229, 70, 31)'}} className={SharedStyles.projectTagText}>Role</strong><span className={SharedStyles.projectTagText}> Developer</span>
            </li>
            <li className={`${SharedStyles.projectTag} ${SharedStyles.projectTagCenter}`}>
              <strong style={{color: 'rgba(229, 70, 31)'}} className={SharedStyles.projectTagText}>Context</strong><span className={SharedStyles.projectTagText}> Education</span>
            </li>
            <li className={`${SharedStyles.projectTag} ${SharedStyles.projectTagCenter}`}>
              <strong style={{color: 'rgba(229, 70, 31)'}} className={SharedStyles.projectTagText}>Period</strong><span className={SharedStyles.projectTagText}> Middle 2018</span>
            </li>
            <li className={`${SharedStyles.projectTag} ${SharedStyles.projectTagRight}`}>
              <strong style={{color: 'rgba(229, 70, 31)'}} className={SharedStyles.projectTagText}>Tech</strong><span className={SharedStyles.projectTagText}> React Native, Redux</span>
            </li>
          </ul>
        </section>
        <div className={styles.imageRow}>
          <img src='../../assets/illini_events_1.png' className={styles.image} />
          <img src='../../assets/illini_events_2.png' className={styles.image} />
          <img src='../../assets/illini_events_3.png' className={styles.image} />
        </div>
        <div className={styles.imageRow}>
          <img src='../../assets/illini_events_4.png' className={styles.image} />
          <img src='../../assets/illini_events_5.png' className={styles.image} />
          <img src='../../assets/illini_events_6.png' className={styles.image} />
        </div>
        <div className={styles.imageRow}>
          <img src='../../assets/illini_events_7.png' className={styles.image} />
          <img src='../../assets/illini_events_8.png' className={styles.image} />
          <img src='../../assets/illini_events_9.png' className={styles.image} />
        </div>
      </div>
      <ProjectsNav previous='/fanchat' next='/emmys-doodles' />
    </div>
  );
}

export default IlliniEvents;


/*
        <section style={{backgroundImage: `url(${'../../assets/illini_events_backdrop.jpg'})`, width: '100%', backgroundSize: 'cover', height: '60vh'}}>
          <div id={SharedStyles.projectInfoContainer}>
          </div>
        </section>
*/