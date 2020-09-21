import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

class Card extends Component {
  render() {
    return (
      <Link to={this.props.link} className={styles.card}>
        <img id={styles.img} src={`${this.props.img}`} />
      </Link>
    );
  }
}

export default Card;
