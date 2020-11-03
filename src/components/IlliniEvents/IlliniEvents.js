import React, { useState } from 'react';
import styles from './IlliniEvents.module.css';
import SharedStyles from '../SharedStyles.module.css';

import ProjectsNav from '../ProjectsNav/ProjectsNav.js';

// BLUE: bdcddf - 667388
// PINK: dfbddc - 886685
// YELO: ded82c - 87841b
const IlliniEvents = () => {
  return (
    <div id={SharedStyles.container}>
      <div id={styles.body}>
        <section id={SharedStyles.projectInfoContainer}>
          <h2 className={SharedStyles.projectHeader}>Illini Events</h2>
          <h4 className={SharedStyles.projectSubheader}>Education Development project done in 2018</h4>
          <hr style={{height: '4px', width: '50px', backgroundColor: 'rgba(229, 70, 31)'}}></hr>
          <h3 className={SharedStyles.projectInfo}>Illini Events was a project created by a team of 5 UIUC students. The aim of the project was to help increase the visibility of low attendance campus events. If students attend an event and check in, they would receive points to unlock special rewards, such as a discount on a concert ticket.</h3>
          <div className={SharedStyles.tagContainer}>
            <a href='https://github.com/nathankillelea/CS468-Event-App' className={SharedStyles.projectSourceButton} style={{backgroundColor: 'rgba(229, 70, 31)'}} target='_blank' rel='noopener noreferrer'>
              <h4 style={{fontWeight: '600'}}>Source Code</h4>
            </a>
            <h4 style={{padding: '4px 12px',}}><strong style={{color: 'rgba(229, 70, 31)', fontWeight: 600}}>Tech</strong><span style={{fontWeight: 600}}> React Native, Redux</span></h4>
          </div>
        </section>
        <h3 className={SharedStyles.projectDesign}>Design</h3>
        <div className={SharedStyles.projectImageRowContainer}>
          <img src='../../assets/illini_events_row_1.jpg' className={styles.image} />
          <img src='../../assets/illini_events_row_2.jpg' className={styles.image} />
          <img src='../../assets/illini_events_row_3.jpg' className={styles.image} />
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