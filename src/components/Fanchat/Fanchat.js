import React from 'react';
import styles from './Fanchat.module.css';
import SharedStyles from '../SharedStyles.module.css';

import ProjectsNav from '../ProjectsNav/ProjectsNav.js';

const Fanchat = () => {
  //'rgba(255, 32, 32)'
  // React Native Web, Redux, Firebase
  return (
    <div id={SharedStyles.container}>
      <div id={styles.body}>
        <section id={SharedStyles.projectInfoContainer}>
          <h2 className={SharedStyles.projectHeader}>Fanchat</h2>
          <h4 className={SharedStyles.projectSubheader}>Personal Development project done in 2020</h4>
          <hr style={{height: '4px', width: '50px', backgroundColor: 'rgba(255, 32, 32)'}}></hr>
          <h3 className={SharedStyles.projectInfo}>Fanchat is....</h3>
          <div className={SharedStyles.tagContainer}>
            <a href='/' className={SharedStyles.projectSourceButton} style={{backgroundColor: 'rgba(255, 32, 32)'}} target='_blank' rel='noopener noreferrer'>
              <h4 style={{fontWeight: '600'}}>Website</h4>
            </a>
            <h4 style={{padding: '4px 12px',}}><strong style={{color: 'rgba(255, 32, 32)', fontWeight: 600}}>Tech</strong><span style={{fontWeight: 600}}> React Native Web, Redux, Firebase, Stripe API</span></h4>
          </div>
        </section>
      </div>
      <ProjectsNav previous='/message-in-a-bottle' next='/illini-events' />
    </div>
  );
}

export default Fanchat;
