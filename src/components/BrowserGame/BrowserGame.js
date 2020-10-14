import React from 'react';
import styles from './BrowserGame.module.css';
import SharedStyles from '../SharedStyles.module.css';

import ProjectsNav from '../ProjectsNav/ProjectsNav.js';

const BrowserGame = () => {
  return (
    <div id={SharedStyles.container}>
      <div id={styles.body}>
        <h2 className={SharedStyles.projectHeader}>Browser Game</h2>
        <h3 className={SharedStyles.projectSubheader}>Browser-based survival game</h3>
        <ul id={SharedStyles.projectTagsContainer}>
          <li className={`${SharedStyles.projectTag} ${SharedStyles.projectTagLeft}`}>
            <strong style={{color: 'rgba(150, 191, 206)'}} className={SharedStyles.projectTagText}>Role</strong><span className={SharedStyles.projectTagText}> Developer</span>
          </li>
          <li className={`${SharedStyles.projectTag} ${SharedStyles.projectTagCenter}`}>
            <strong style={{color: 'rgba(150, 191, 206)'}} className={SharedStyles.projectTagText}>Context</strong><span className={SharedStyles.projectTagText}> Education</span>
          </li>
          <li className={`${SharedStyles.projectTag} ${SharedStyles.projectTagCenter}`}>
            <strong style={{color: 'rgba(150, 191, 206)'}} className={SharedStyles.projectTagText}>Period</strong><span className={SharedStyles.projectTagText}> Early 2018</span>
          </li>
          <li className={`${SharedStyles.projectTag} ${SharedStyles.projectTagRight}`}>
            <strong style={{color: 'rgba(150, 191, 206)'}} className={SharedStyles.projectTagText}>Tech</strong><span className={SharedStyles.projectTagText}> Javascript, HTML5 Canvas</span>
          </li>
        </ul>
      </div>
      <ProjectsNav previous='/emmys-doodles' next='/message-in-a-bottle' />
    </div>
  );
}

export default BrowserGame;
