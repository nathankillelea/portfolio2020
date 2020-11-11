import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import styles from './ProjectsNav.module.css';

const ProjectsNav = (props) => {
  return (
    <div id={styles.projectNavigationContainer}>
      <Link to={props.previous} id={styles.projectPrevious} className={styles.projectLink}>
        <FontAwesomeIcon icon={faLongArrowAltLeft} className={styles.icon} />
        <h2 style={{paddingLeft: '12px'}}>Previous</h2>
      </Link>
      <Link to={props.next} id={styles.projectNext} className={styles.projectLink}>
        <h2 style={{paddingRight: '12px'}}>Next</h2>
        <FontAwesomeIcon icon={faLongArrowAltRight} className={styles.icon} />
      </Link>
    </div>
  )
};

export default ProjectsNav;