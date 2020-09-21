import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faCodepen } from '@fortawesome/free-brands-svg-icons';
import styles from './Fanchat.module.css';
import SharedStyles from '../SharedStyles.module.css';

class Fanchat extends Component {
  render() {
    return (
      <div id={SharedStyles.container}>
        <div id={SharedStyles.headerContainer}>
          <header id={SharedStyles.header}>
            <div id={SharedStyles.title}>
              <p id={SharedStyles.titleText}>Nathan Killelea</p>
            </div>
            <nav id={SharedStyles.nav}>
              <ul id={SharedStyles.navList}>
                <li className={SharedStyles.navItem}><p className={SharedStyles.navText} onClick={() => scrollToComponent(this.Projects, {offset: -102, align: 'top', duration: 750})}>Projects</p></li>
                <li className={SharedStyles.navItem}><p className={SharedStyles.navText} onClick={() => scrollToComponent(this.Contact, {offset: 0, align: 'top', duration: 1500})}>Contact</p></li>
              </ul>
            </nav>
          </header>
        </div>
        <div id={styles.body}>
          <h2>Fanchat</h2>
        </div>
        <footer id={SharedStyles.footer}>
          <ul id={SharedStyles.contactGroup}>
            <li className={SharedStyles.iconItem}><a href='https://github.com/nathankillelea' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon className={SharedStyles.icon} id={SharedStyles.github} icon={faGithub} /></a></li>
            <li className={SharedStyles.iconItem}><a href='https://www.linkedin.com/in/killelea' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon className={SharedStyles.icon} id={SharedStyles.linkedin} icon={faLinkedinIn} /></a></li>
            <li className={SharedStyles.iconItem}><a href='https://codepen.io/nathankillelea' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon className={SharedStyles.icon} id={SharedStyles.codepen} icon={faCodepen} /></a></li>
          </ul>
          <p id={SharedStyles.copyrightText}>© 2020 Nathan Killelea</p>
        </footer>
      </div>
    );
  }
}

export default Fanchat;
