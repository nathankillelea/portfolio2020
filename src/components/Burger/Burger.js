import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './Burger.module.css';
import { useOnClickOutside } from '../../hooks';

const Burger = ({open, setOpen, content}) => {
  const node = useRef();
  
  const handleClose = () => {
    setOpen(false);
    //content.current.style.right = '0';
  }

  useOnClickOutside(node, () => handleClose());

  return (
    <div id={styles.container} ref={node}>
      <ul>
        <li className={styles.navItem}><Link to={'/about'} className={styles.navText} style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={() => handleClose()}>About</Link></li>
        <li className={styles.navItem}><Link to={'/projects'} className={styles.navText} style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={() => handleClose()}>Projects</Link></li>
        <li className={styles.navItem}><a href='mailto:nathan.killelea@gmail.com' className={styles.navText} style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={() => handleClose()}>Contact</a></li>
      </ul>
    </div>
  )
};

export default Burger;