import React from 'react';
import styles from './Projects.module.css';
import SharedStyles from '../SharedStyles.module.css';

const Projects = () => {
  return (
    <div id={SharedStyles.container}>
      <div id={styles.body}>
        <h2>Projects</h2>
        <p>could possibly add extra/fun projects like discord emote bot, </p>
      </div>
    </div>
  );
}

export default Projects;
