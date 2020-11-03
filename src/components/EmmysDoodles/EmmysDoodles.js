import React from 'react';
import styles from './EmmysDoodles.module.css';
import SharedStyles from '../SharedStyles.module.css';

import ProjectsNav from '../ProjectsNav/ProjectsNav.js';

const EmmysDoodles = () => {
  //'rgba(244, 219, 155)'
  return (
    <div id={SharedStyles.container}>
      <div id={styles.body}>
        <section id={SharedStyles.projectInfoContainer}>
          <h2 className={SharedStyles.projectHeader}>Emmy's Doodles</h2>
          <h4 className={SharedStyles.projectSubheader}>Freelance Development project done in 2019 - 2020</h4>
          <hr style={{height: '4px', width: '50px', backgroundColor: 'rgba(244, 219, 155)'}}></hr>
          <h3 className={SharedStyles.projectInfo}>Emmy's Doodles is a e-commerce website for goldendoodle stickers. A custom e-commerce solution was created with logins handled by firebase. Firebase anonymous authentication is used to store the carts of users who do not sign in; upon sign up, these anonymous accounts will be converted as well as their carts. Payments are handled through the Stripe API.</h3>
          <div className={SharedStyles.tagContainer}>
            <a href='/' className={SharedStyles.projectSourceButton} style={{backgroundColor: 'rgba(244, 219, 155)'}} target='_blank' rel='noopener noreferrer'>
              <h4 style={{fontWeight: '600'}}>Website</h4>
            </a>
            <h4 style={{padding: '4px 12px',}}><strong style={{color: 'rgba(244, 219, 155)', fontWeight: 600}}>Tech</strong><span style={{fontWeight: 600}}> React, Redux, Firebase, Stripe API</span></h4>
          </div>
        </section>
        <h3 className={SharedStyles.projectDesign}>Design</h3>
        <div className={SharedStyles.projectImageRowContainer}>
          <img src='../../assets/emmys_doodles_1.jpg' className={styles.image} />
        </div>
      </div>
      <ProjectsNav previous='/illini-events' next='/browser-game' />
    </div>
  );
}

export default EmmysDoodles;
