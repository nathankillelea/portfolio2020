import React from 'react';
import styles from './ZombieSurvival.module.css';
import SharedStyles from '../SharedStyles.module.css';

import ProjectsNav from '../ProjectsNav/ProjectsNav.js';

const ZombieSurvival = () => {
  return (
    <div id={SharedStyles.container}>
      <div id={styles.body}>
        <section id={SharedStyles.projectInfoContainer}>
          <h2 className={SharedStyles.projectHeader}>Zombie Survival</h2>
          <h4 className={SharedStyles.projectSubheader}>Education Development project done in 2018</h4>
          <hr style={{height: '4px', width: '50px', backgroundColor: 'rgba(150, 191, 206)'}}></hr>
          <h3 className={SharedStyles.projectInfo}>Zombie Survival was a game created by 2 college students. The game is a top-down arcade shooter. The goal is to survive as long as possible and rack up the highest score. New waves bring new enemies with unique abilities and properties. There are numerous weapons and traps available to defeat them.</h3>
          <div className={SharedStyles.tagContainer}>
            <a href='https://nathankillelea.github.io/CS242-Final-Project/' className={SharedStyles.projectSourceButton} style={{backgroundColor: 'rgba(150, 191, 206)'}} target='_blank' rel='noopener noreferrer'>
              <h4 style={{fontWeight: '600'}}>Website</h4>
            </a>
            <a href='https://github.com/nathankillelea/CS242-Final-Project' className={SharedStyles.projectSourceButton} style={{backgroundColor: 'rgba(150, 191, 206)', marginLeft: '12px'}} target='_blank' rel='noopener noreferrer'>
              <h4 style={{fontWeight: '600'}}>Source Code</h4>
            </a>
            <h4 className={SharedStyles.tagText}><strong style={{color: 'rgba(150, 191, 206)', fontWeight: 600}}>Tech</strong><span style={{fontWeight: 600}}> Javascript, HTML5 Canvas</span></h4>
          </div>
        </section>
        <h3 className={SharedStyles.projectDesign}>Design</h3>
        <div className={SharedStyles.projectImageRowContainer}>
          <img src='../../assets/browser_game_1.jpg' className={styles.image} alt='Zombie Survival Design' />
        </div>
      </div>
      <ProjectsNav previous='/message-in-a-bottle' next='/illini-events' />
    </div>
  );
}

export default ZombieSurvival;
