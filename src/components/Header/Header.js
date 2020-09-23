import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return(
    <div id={styles.headerContainer}>
      <header id={styles.header}>
      <div id={styles.title}>
        <Link to={'/'} style={{ color: 'inherit', textDecoration: 'inherit'}} id={styles.titleText}>Nathan Killelea</Link>
      </div>
      <nav id={styles.nav}>
        <ul id={styles.navList}>
          <li className={styles.navItem}><Link to={'/about'} className={styles.navText} style={{ color: 'inherit', textDecoration: 'inherit'}}>About</Link></li>
          <li className={styles.navItem}><Link to={'/projects'} className={styles.navText} style={{ color: 'inherit', textDecoration: 'inherit'}}>Projects</Link></li>
          <li className={styles.navItem}><a href='mailto:nathan.killelea@gmail.com' className={styles.navText} style={{ color: 'inherit', textDecoration: 'inherit'}}>Contact</a></li>
        </ul>
      </nav>
    </header>
  </div>
  )
};

export default Header;