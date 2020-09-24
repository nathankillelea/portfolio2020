import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated, config, useChain } from 'react-spring';
import styles from './Card.module.css';

const Card = (props) => {
  const [hover, setHover] = useState(false);
  //const hover1Ref = useRef();
  const hoverState = useSpring({
    transform: hover
      ? 'scale(1.02)'
      : 'scale(1)',
      config: config.wobbly
      /*ref: hover1Ref*/
  });

  /*
  const hover2Ref = useRef();
  const hoverState2 = useSpring({
    transform: hover
    ? 'scale(1.06)'
    : 'scale(1)',
    ref: hover2Ref
  });
  */

  //const color1Ref = useRef();
  const color = useSpring({
    from: {position: 'absolute', top: 0, left: 0, width: '0%', height: '100%', backgroundColor: `${props.backgroundColor}`},
    to: hover ? {position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: `${props.backgroundColor}`} : null,
    /*ref: color1Ref*/
  });

  //const color2Ref = useRef();
  const color2 = useSpring({
    from: {position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', backgroundColor: 'rgba(28,29,37, 0.4)'},
    to: hover ? {position: 'absolute', top: 0, right: 0, width: '0%', height: '100%', backgroundColor: 'rgba(28,29,37, 0.4)'} : null,
    /*ref: color2Ref*/
  });

  //useChain([color1Ref, hover2Ref]);

  // make words scale in size after
  // make this better, not very good rn, text feels weird

  return ( 
    <Link to={props.link} className={styles.card}>
      <animated.div
        style={hoverState}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <animated.div style={color} />
        <animated.div style={color2} />
        <div id={styles.textContainer}>
          <h1 id={styles.title}>{props.title}</h1>
          <h2 id={styles.subtitle}>{props.description}</h2>
        </div>
        <img id={styles.img} src={props.img}/>
      </animated.div>
    </Link>
  );
}

export default Card;
