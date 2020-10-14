import React from 'react';
import styles from './EmmysDoodles.module.css';
import SharedStyles from '../SharedStyles.module.css';

import ProjectsNav from '../ProjectsNav/ProjectsNav.js';

const EmmysDoodles = () => {
  return (
    <div id={SharedStyles.container}>
      <div id={styles.body}>
        <h2 className={SharedStyles.projectHeader}>Emmy's Doodles</h2>
        <h3 className={SharedStyles.projectSubheader}>E-commerce website for goldendoodle stickers</h3>
        <ul id={SharedStyles.projectTagsContainer}>
          <li className={`${SharedStyles.projectTag} ${SharedStyles.projectTagLeft}`}>
            <strong style={{color: 'rgba(244, 219, 155)'}} className={SharedStyles.projectTagText}>Role</strong><span className={SharedStyles.projectTagText}> Developer</span>
          </li>
          <li className={`${SharedStyles.projectTag} ${SharedStyles.projectTagCenter}`}>
            <strong style={{color: 'rgba(244, 219, 155)'}} className={SharedStyles.projectTagText}>Context</strong><span className={SharedStyles.projectTagText}> Freelance</span>
          </li>
          <li className={`${SharedStyles.projectTag} ${SharedStyles.projectTagCenter}`}>
            <strong style={{color: 'rgba(244, 219, 155)'}} className={SharedStyles.projectTagText}>Period</strong><span className={SharedStyles.projectTagText}> Late 2019</span>
          </li>
          <li className={`${SharedStyles.projectTag} ${SharedStyles.projectTagRight}`}>
            <strong style={{color: 'rgba(244, 219, 155)'}} className={SharedStyles.projectTagText}>Tech</strong><span className={SharedStyles.projectTagText}> React, Redux, Firebase</span>
          </li>
        </ul>
      </div>
      <ProjectsNav previous='/illini-events' next='/browser-game' />
    </div>
  );
}

export default EmmysDoodles;
