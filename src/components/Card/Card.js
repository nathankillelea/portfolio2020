import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated, config } from 'react-spring';
import styles from './Card.module.css';

const Card = (props) => {
  const [hover, setHover] = useState(false);
  const hoverState = useSpring({
    transform: hover
      ? 'translate3d(0px, -12px, 0px) scale(1.01)'
      : 'translate3d(0px, 0px, 0px) scale(1)',
    config: config.wobbly
  });

  return (
    <Link to={props.link} className={styles.card}>
      <animated.div
        style={{...hoverState}}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img id={styles.img} src={`${props.img}`}/>
      </animated.div>
    </Link>
  );
}

export default Card;
