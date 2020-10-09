import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './About.module.css';
import SharedStyles from '../SharedStyles.module.css';

// FIX RESPONSIVENESS!!!!!!!!!!!
// - about container < 918
// - skills container is trash idk

const About = () => {
  return (
    <div id={SharedStyles.container}>
      <div id={styles.body}>
        <section id={styles.aboutContainer}>
          <img src='../../assets/nathan_killelea.jpg' id={styles.img} />
          <div id={styles.aboutTextContainer}>
            <h2 id={styles.aboutHeader} className={styles.selectionText}>Hey, I'm Nathan Killelea.</h2>
            <p className={styles.selectionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </section>
        <section id={styles.skillsContainer}>
          <h2 id={styles.skillsHeader} className={styles.selectionText}>Skills</h2>
          <div id={styles.skillsColumnContainer}>
            <div className={styles.skillsColumn}>
              <h3 className={`${styles.skillsSubheader} ${styles.selectionText}`}>Languages</h3>
              <ul>
                <li><p className={styles.selectionText}>C</p></li>
                <li><p className={styles.selectionText}>Haskell</p></li>
                <li><p className={styles.selectionText}>Java</p></li>
                <li><p className={styles.selectionText}>Javascript</p></li>
                <li><p className={styles.selectionText}>Python</p></li>
                <li><p className={styles.selectionText}>R</p></li>
                <li><p className={styles.selectionText}>Ruby</p></li>
              </ul>
            </div>
            <div className={styles.skillsColumn}>
              <h3 className={`${styles.skillsSubheader} ${styles.selectionText}`}>Frameworks/Libraries</h3>
              <ul>
                <li><p className={styles.selectionText}>React</p></li>
                <li><p className={styles.selectionText}>Redux</p></li>
                <li><p className={styles.selectionText}>React Native</p></li>
                <li><p className={styles.selectionText}>Express</p></li>
              </ul>
            </div>
            <div className={styles.skillsColumn}>
              <h3 className={`${styles.skillsSubheader} ${styles.selectionText}`}>IDK</h3>
              <ul>
                <li><p className={styles.selectionText}>Firebase</p></li>
                <li><p className={styles.selectionText}>Cloud Firestore</p></li>
                <li><p className={styles.selectionText}>MongoDB</p></li>
                <li><p className={styles.selectionText}>Git</p></li>
                <li><p className={styles.selectionText}>Subversion</p></li>
                <li><p className={styles.selectionText}>HTML5</p></li>
                <li><p className={styles.selectionText}>CSS3</p></li>
                <li><p className={styles.selectionText}>Node</p></li>
                <li><p className={styles.selectionText}>MySQL</p></li>
              </ul>
            </div>
            <div className={styles.skillsColumn}>
              <h3 className={`${styles.skillsSubheader} ${styles.selectionText}`}>IDK2</h3>
              <ul>
                <li><p className={styles.selectionText}>STUFF</p></li>
              </ul>
            </div>
          </div>
        </section>
        <section id={styles.experienceContainer}>
          <h2 id={styles.experienceHeader} className={styles.selectionText}>Experiences</h2>
          <div id={styles.experienceContentContainer}>
            <div className={styles.experienceItemContainer}>
              <div className={styles.experienceItemTitleContainer}>
                <h3 className={styles.selectionText}>Epic Systems</h3>
                <h4 className={styles.selectionText}>Software Developer</h4>
                <h4 className={styles.selectionText}>2018-2019</h4>
              </div>
              <ul className={styles.experienceItemInfoContainer}>
                <li className={styles.experienceListItem}><p className={styles.selectionText}>Solved high priority, regulatory issues critical to customers' financial success</p></li>
                <li className={styles.experienceListItem}><p className={styles.selectionText}>Worked on bug fixes, user interface updates, and implementing new features</p></li>
                <li className={styles.experienceListItem}><p className={styles.selectionText}>Performed and received regular code review for company best standards and code functionality</p></li>
                <li className={styles.experienceListItem}><p className={styles.selectionText}>Developed in Caché/M, VB6, C#, and Typescript</p></li>
              </ul>
            </div>
            <div className={styles.experienceItemContainer}>
              <div className={styles.experienceItemTitleContainer}>
                <h3 className={styles.selectionText}>University of Illinois at Urbana-Champaign</h3>
                <h4 className={styles.selectionText}>Computer Science</h4>
                <h4 className={styles.selectionText}>2016-2018</h4>
              </div>
              <ul className={styles.experienceItemInfoContainer}>
                <li className={styles.experienceListItem}><p className={styles.selectionText}>Graduated with a 3.44 GPA</p></li>
                <li className={styles.experienceListItem}><p className={styles.selectionText}>Earned a Bachelor's Degree in Computer Science</p></li>
                <li className={styles.experienceListItem}><p className={styles.selectionText}>Made the Dean's List Spring 2018</p></li>
                <li className={styles.experienceListItem}><p className={styles.selectionText}>Selected Coursework: The Art of Web Programing, User Interface Design, Tech and Advertising Campaigns, Digital Forensics, Computer Security 1, Applied Machine Learning</p></li>
              </ul>
            </div>
            <div className={styles.experienceItemContainer}>
              <div className={styles.experienceItemTitleContainer}>
                <h3 className={styles.selectionText}>Illinois Valley Community College</h3>
                <h4 className={styles.selectionText}>Associate of Engineering Science</h4>
                <h4 className={styles.selectionText}>2014-2016</h4>
              </div>
              <ul className={styles.experienceItemInfoContainer}>
                <li className={styles.experienceListItem}><p className={styles.selectionText}>Graduated with a 3.89 GPA</p></li>
                <li className={styles.experienceListItem}><p className={styles.selectionText}>Earned an Associate of Engineering Science degree</p></li>
                <li className={styles.experienceListItem}><p className={styles.selectionText}>Received academic and/or presidential honors every semester</p></li>
                <li className={styles.experienceListItem}><p className={styles.selectionText}>Member of Phi Theta Kappa Honor Society and Sigma Kappa Delta Honor Society</p></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
