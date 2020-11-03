import React, { useState } from 'react';
import styles from './MessageInABottle.module.css';
import SharedStyles from '../SharedStyles.module.css';

import ProjectsNav from '../ProjectsNav/ProjectsNav.js';

const MessageInABottle = () => {
  return (
    <div id={SharedStyles.container}>
      <div id={styles.body}>
        <section id={SharedStyles.projectInfoContainer}>
          <h2 className={SharedStyles.projectHeader}>Message in a Bottle</h2>
          <h4 className={SharedStyles.projectSubheader}>Education Development project done in 2017</h4>
          <hr style={{height: '4px', width: '50px', backgroundColor: 'rgba(150, 206, 180)'}}></hr>
          <h3 className={SharedStyles.projectInfo}>Message in a Bottle was a project created by a team of 5 UIUC students. The goal of the project was to create a full-stack app; users create and set goals for themselves on the calendar, vent their frustrations by sending bottles into the Black Bay, and receive motivation to complete their goals by reading motivational quotes that wash up in bottles on the home screen.</h3>
          <div className={SharedStyles.tagContainer}>
            <a href='https://github.com/nathankillelea/CS498RK-Final-Project' className={SharedStyles.projectSourceButton} style={{backgroundColor: 'rgba(150, 206, 180)'}} target='_blank' rel='noopener noreferrer'>
              <h4 style={{fontWeight: '600'}}>Source Code</h4>
            </a>
            <h4 style={{padding: '4px 12px',}}><strong style={{color: 'rgba(150, 206, 180)', fontWeight: 600}}>Tech</strong><span style={{fontWeight: 600}}> MongoDB, Express, React Native, Node</span></h4>
          </div>
        </section>
        <h3 className={SharedStyles.projectDesign}>Design</h3>
        <div className={SharedStyles.projectImageRowContainer}>
          <img src='../../assets/message_in_a_bottle_row_1.jpg' className={styles.image} />
        </div>
      </div>
      <ProjectsNav previous='/browser-game' next='/fanchat' />
    </div>
  );
}

export default MessageInABottle;
