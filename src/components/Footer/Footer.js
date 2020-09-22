import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faCodepen } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

const Footer = () => {
  return(
    <footer id={styles.footer}>
      <ul id={styles.contactGroup}>
        <li className={styles.iconItem}><a href='https://github.com/nathankillelea' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon className={styles.icon} id={styles.github} icon={faGithub} /></a></li>
        <li className={styles.iconItem}><a href='https://www.linkedin.com/in/killelea' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon className={styles.icon} id={styles.linkedin} icon={faLinkedinIn} /></a></li>
        <li className={styles.iconItem}><a href='https://codepen.io/nathankillelea' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon className={styles.icon} id={styles.codepen} icon={faCodepen} /></a></li>
      </ul>
      <p id={styles.copyrightText}>© 2020 Nathan Killelea</p>
  </footer>
  )
};

export default Footer;