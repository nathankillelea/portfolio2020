import React from 'react';
import styles from './BrowserGame.module.css';
import SharedStyles from '../SharedStyles.module.css';

import ProjectsNav from '../ProjectsNav/ProjectsNav.js';

const BrowserGame = () => {
  return (
    <div id={SharedStyles.container}>
      <div id={styles.body}>
        <section id={SharedStyles.projectInfoContainer}>
          <h2 className={SharedStyles.projectHeader}>Browser Game</h2>
          <h4 className={SharedStyles.projectSubheader}>Education Development project done in 2018</h4>
          <hr style={{height: '4px', width: '50px', backgroundColor: 'rgba(150, 191, 206)'}}></hr>
          <h3 className={SharedStyles.projectInfo}>Browser game was a game created by 2 college students. The game is a top-down arcade shooter. The goal is to survive as long as possible and rack up the highest score. New waves bring new enemies with unique abilities and properties. There are numerous weapons and traps available to defeat them.</h3>
          <div className={SharedStyles.tagContainer}>
            <a href='https://github.com/nathankillelea/CS242-Final-Project' className={SharedStyles.projectSourceButton} style={{backgroundColor: 'rgba(150, 191, 206)'}} target='_blank' rel='noopener noreferrer'>
              <h4 style={{fontWeight: '600'}}>Source Code</h4>
            </a>
            <h4 style={{padding: '4px 12px',}}><strong style={{color: 'rgba(150, 191, 206)', fontWeight: 600}}>Tech</strong><span style={{fontWeight: 600}}> Javascript, HTML5 Canvas</span></h4>
          </div>
        </section>
      </div>
      <ProjectsNav previous='/emmys-doodles' next='/message-in-a-bottle' />
    </div>
  );
}

export default BrowserGame;
