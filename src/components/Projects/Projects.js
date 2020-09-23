import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import styles from './Projects.module.css';
import SharedStyles from '../SharedStyles.module.css';

class Projects extends Component {
  render() {
    return (
      <div id={SharedStyles.container}>
        <div id={styles.body}>
          <h2>Projects</h2>
        </div>
      </div>
    );
  }
}

export default Projects;
