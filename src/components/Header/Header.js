import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';

import Burger from '../Burger/Burger.js';
import { useOnClickOutside } from '../../hooks';
import { animated, useSpring, useTransition, useChain } from 'react-spring';

// WHEN U OPEN THE BURGER IT DOESNT LOOK GOOD CUZ THE SPACE IS RENDERED IN THE DOM IMMEDIATELY SO THE SPACE APPEARS IMMEDIATELY
// THEN THE CONTENT SLIDES IN, I WOULD LIKE THE CONTENT TO SLIDE DOWN WITH IT TO LOOK LIKE ITS PUSHING IT DOWN

// MAYBE I PUT THE USE STATE OPEN SHIT ON APP, THEN I CAN INTERPOLATE THE CONTENT DOWN AS WELL ON PRESS ??????


const Header = ({content}) => {
  const width = useWindowWidth();
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const props = useSpring({y: open ? 0 : 100});

  return (
    <div ref={node}>
      <div id={styles.headerContainer}>
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
                <li className={styles.navItem}><Link to={'/projects'} className={styles.navText} style={{ color: 'inherit', textDecoration: 'inherit'}}>Projects</Link></li>
                <li className={styles.navItem}><a href='mailto:nathan.killelea@gmail.com' className={styles.navText} style={{ color: 'inherit', textDecoration: 'inherit'}}>Contact</a></li>
              </>
            }
          </ul>
        </nav>
      </header>
    </div>
    {
      open
      ?
      <animated.div
        style={{
          transform: props.y
          .interpolate(y => `translate3d(0, ${y*-1}%, 0)`)
        }}
      >
        <div id={styles.burgerContainer} >
          <ul>
            <li className={styles.burgerNavItem}><Link to={'/about'} className={styles.burgerNavText} style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={() => setOpen(false)}>About</Link></li>
            <li className={styles.burgerNavItem}><Link to={'/projects'} className={styles.burgerNavText} style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={() => setOpen(false)}>Projects</Link></li>
            <li className={styles.burgerNavItem}><a href='mailto:nathan.killelea@gmail.com' className={styles.burgerNavText} style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </animated.div>
      :
      null
    }
  </div>
  )
};

export default Header;