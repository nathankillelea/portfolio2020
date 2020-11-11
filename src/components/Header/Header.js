import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { animated, useSpring } from 'react-spring';
import styles from './Header.module.css';

const Header = ({open, setOpen, width}) => {
  const props = useSpring({x: open ? 0 : 100});

  useEffect(() => {
    if(open) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'auto';
    }
  })

  return (
    <div style={{position: 'sticky', top: 0, width: '100%', zIndex: 100}}>
      <div id={styles.headerContainer} style={{zIndex: 2}}>
        <header id={styles.header}>
          <div id={styles.title}>
            <Link to={'/'} style={{ color: 'inherit', textDecoration: 'inherit'}} id={styles.titleText}>Nathan Killelea</Link>
          </div>
          <nav id={styles.nav}>
            <ul id={styles.navList}>
            {
              width <= 600
              ?
              <li><FontAwesomeIcon id={styles.burger} icon={faBars} onClick={() => setOpen(!open)} /></li>
              :
              <>
                <li className={styles.navItem}><Link to={'/about'} className={styles.navText} style={{ color: 'inherit', textDecoration: 'inherit'}}>About</Link></li>
                <li className={styles.navItem}><a href='mailto:nathan.killelea@gmail.com' className={styles.navText} style={{ color: 'inherit', textDecoration: 'inherit'}}>Contact</a></li>
              </>
            }
            </ul>
          </nav>
        </header>
      </div>
      {
        width <= 600
        ?
        <animated.div id={styles.mobileNavContainer} 
          style={{
            transform: props.x
            .to(x => `translate3d(${x}%, 0, 0)`)
          }}
        >
          <div style={{position: 'absolute', top: 0, left: 0, width: '100%'}}>
            <header id={styles.header}>
              <nav id={styles.nav}>
                <ul id={styles.navList}>
                  <li><FontAwesomeIcon id={styles.burger} icon={faTimes} onClick={() => setOpen(!open)} /></li>
                </ul>
              </nav>
            </header>
          </div>
          <ul>
            <li className={styles.mobileNavItem}><Link to={'/about'} className={styles.mobileNavText} style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={() => setOpen(false)}>About</Link></li>
            <li className={styles.mobileNavItem}><a href='mailto:nathan.killelea@gmail.com' className={styles.mobileNavText} style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        </animated.div>
        :
        null
      }
  </div>
  )
};

export default Header;