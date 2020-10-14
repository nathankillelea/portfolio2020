import React from 'react';
import styles from './Fanchat.module.css';
import SharedStyles from '../SharedStyles.module.css';

import ProjectsNav from '../ProjectsNav/ProjectsNav.js';

const Fanchat = () => {
  return (
    <div id={SharedStyles.container}>
      <div id={styles.body}>
        <h2 className={SharedStyles.projectHeader}>Fanchat</h2>
        <h3 className={SharedStyles.projectSubheader}>Subscription-based chatting</h3>
        <ul id={SharedStyles.projectTagsContainer}>
          <li className={`${SharedStyles.projectTag} ${SharedStyles.projectTagLeft}`}>
            <strong style={{color: 'rgba(255, 32, 32)'}} className={SharedStyles.projectTagText}>Role</strong><span className={SharedStyles.projectTagText}> Developer</span>
          </li>
          <li className={`${SharedStyles.projectTag} ${SharedStyles.projectTagCenter}`}>
            <strong style={{color: 'rgba(255, 32, 32)'}} className={SharedStyles.projectTagText}>Context</strong><span className={SharedStyles.projectTagText}> Personal</span>
          </li>
          <li className={`${SharedStyles.projectTag} ${SharedStyles.projectTagCenter}`}>
            <strong style={{color: 'rgba(255, 32, 32)'}} className={SharedStyles.projectTagText}>Period</strong><span className={SharedStyles.projectTagText}> 2020</span>
          </li>
          <li className={`${SharedStyles.projectTag} ${SharedStyles.projectTagRight}`}>
            <strong style={{color: 'rgba(255, 32, 32)'}} className={SharedStyles.projectTagText}>Tech</strong><span className={SharedStyles.projectTagText}> React Native Web, Redux, Firebase</span>
          </li>
        </ul>
      </div>
      <ProjectsNav previous='/message-in-a-bottle' next='/illini-events' />
    </div>
  );
}

export default Fanchat;
