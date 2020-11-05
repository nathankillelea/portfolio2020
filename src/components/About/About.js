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
          <div className={styles.imageContainer}>
            <img src='../../assets/nathan_killelea.jpg' className={styles.img} />
          </div>
          <div id={styles.aboutTextContainer}>
            <h2 id={styles.aboutHeader} className={styles.selectionText}>Hey, I'm Nathan Killelea.</h2>
            <p className={styles.selectionText}>I am a software developer with a passion for all things web. I am a graduate from the College of Engineering at the University of Illinois at Urbana-Champaign.</p>
            <p className={styles.selectionText} style={{paddingTop: '24px'}}>I love using modern frameworks and technologies to create simple, elegant web solutions. I am always learning and trying to improve my skills as a developer. I may not know everything, but I am uniquely determined and capable of figuring out creative solutions to any problem that I come across.</p>
            <p className={styles.selectionText} style={{paddingTop: '24px'}}>I am currently open to full-time, part-time, or freelance opportunities.</p>
          </div>
        </section>
        <section id={styles.skillsContainer}>
          <h2 id={styles.skillsHeader} className={styles.selectionText}>Skills and Technologies</h2>
          <div id={styles.skillsColumnContainer}>
            <div className={`${styles.skillsColumn} ${styles.skillsColumnLeft}`}>
              <h3 className={`${styles.skillsSubheaderText} ${styles.selectionText}`}>Languages</h3>
              <ul>
                <li className={styles.skillsItem}>
                  <div className={styles.logoContainer}>
                    <img src='../../assets/logos/HTML5.png' className={styles.logo} />
                  </div>
                  <p className={styles.selectionText}>HTML5</p>
                </li>
                <li className={styles.skillsItem}>
                  <div className={styles.logoContainer}>
                    <img src='../../assets/logos/CSS3.png' className={styles.logo} />
                  </div>
                  <p className={styles.selectionText}>CSS3</p>
                </li>
                <li className={styles.skillsItem}>
                  <div className={styles.logoContainer}>
                    <img src='../../assets/logos/C.png' className={styles.logo} />
                  </div>
                  <p className={styles.selectionText}>C</p>
                </li>
                <li className={styles.skillsItem}>
                  <div className={styles.logoContainer}>
                   <img src='../../assets/logos/Haskell.png' className={styles.logo} />
                  </div>
                  <p className={styles.selectionText}>Haskell</p>
                </li>
                <li className={styles.skillsItem}>
                  <div className={styles.logoContainer}>
                    <img src='../../assets/logos/Java.png' className={styles.logo} />
                  </div>
                  <p className={styles.selectionText}>Java</p>
                </li>
                <li className={styles.skillsItem}>
                  <div className={styles.logoContainer}>
                    <img src='../../assets/logos/JavaScript.png' className={styles.logo} />
                  </div>
                  <p className={styles.selectionText}>Javascript</p>
                </li>
                <li className={styles.skillsItem}>
                  <div className={styles.logoContainer}>
                    <img src='../../assets/logos/Python.png' className={styles.logo} />
                  </div>
                  <p className={styles.selectionText}>Python</p>
                </li>
                <li className={styles.skillsItem}>
                  <div className={styles.logoContainer}>
                    <img src='../../assets/logos/R.png' className={styles.logo} />
                  </div>
                  <p className={styles.selectionText}>R</p>
                </li>
                <li className={styles.skillsItem}>
                  <div className={styles.logoContainer}>
                    <img src='../../assets/logos/Ruby.png' className={styles.logo} />
                  </div>
                  <p className={styles.selectionText}>Ruby</p>
                </li>
              </ul>
            </div>
            <div className={`${styles.skillsColumn} ${styles.skillsColumnCenter}`}>
              <h3 className={`${styles.skillsSubheaderText} ${styles.selectionText}`}>Frameworks/Libraries</h3>
              <ul>
                <li className={styles.skillsItem}>
                  <div className={styles.logoContainer}>
                    <img src='../../assets/logos/React.png' className={styles.logo} />
                  </div>
                  <p className={styles.selectionText}>React</p>
                </li>
                <li className={styles.skillsItem}>
                  <div className={styles.logoContainer}>
                    <img src='../../assets/logos/Redux.png' className={styles.logo} />
                  </div>
                  <p className={styles.selectionText}>Redux</p>
                </li>
                <li className={styles.skillsItem}>
                  <div className={styles.logoContainer}>
                    <img src='../../assets/logos/React.png' className={styles.logo} />
                  </div>
                  <p className={styles.selectionText}>React Native</p>
                </li>
                <li className={styles.skillsItem}>
                  <div className={styles.logoContainer}>
                    <img src='../../assets/logos/Node.png' className={styles.logo} />
                  </div>
                  <p className={styles.selectionText}>Express</p>
                </li>
              </ul>
            </div>
            <div className={`${styles.skillsColumn} ${styles.skillsColumnCenter}`}>
              <h3 className={`${styles.skillsSubheaderText} ${styles.selectionText}`}>Web Technologies</h3>
              <ul>
                <li className={styles.skillsItem}>
                  <div className={styles.logoContainer}>
                    <img src='../../assets/logos/Git.png' className={styles.logo} />
                  </div>
                  <p className={styles.selectionText}>Git</p>
                </li>
                <li className={styles.skillsItem}>
                  <div className={styles.logoContainer}>
                    <img src='../../assets/logos/Subversion.png' className={styles.logo} />
                  </div>
                  <p className={styles.selectionText}>Subversion</p>
                </li>
                <li className={styles.skillsItem}>
                  <div className={styles.logoContainer}>
                    <img src='../../assets/logos/Node.png' className={styles.logo} />
                  </div>
                  <p className={styles.selectionText}>Node</p>
                </li>
              </ul>
            </div>
            <div className={`${styles.skillsColumn} ${styles.skillsColumnRight}`}>
              <h3 className={`${styles.skillsSubheaderText} ${styles.selectionText}`}>Databases</h3>
              <ul>
                <li className={styles.skillsItem}>
                  <div className={styles.logoContainer}>
                    <img src='../../assets/logos/Firebase.png' className={styles.logo} />
                  </div>
                  <p className={styles.selectionText}>Firebase Cloud Firestore</p>
                </li>
                <li className={styles.skillsItem}>
                  <div className={styles.logoContainer}>
                    <img src='../../assets/logos/MongoDB.png' className={styles.logo} />
                  </div>
                  <p className={styles.selectionText}>MongoDB</p>
                </li>
                <li className={styles.skillsItem}>
                  <div className={styles.logoContainer}>
                    <img src='../../assets/logos/MySQL.png' className={styles.logo} />
                  </div>
                  <p className={styles.selectionText}>MySQL</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id={styles.experienceContainer}>
          <h2 id={styles.experienceHeader}>Experience and Education</h2>
          <div id={styles.experienceContentContainer}>
            <div className={styles.experienceItemContainer}>
              <div className={styles.experienceItemTitleContainer}>
                <h3>⚕️ Epic Systems</h3>
                <h4>Software Developer</h4>
                <h4>2018-2019</h4>
              </div>
              <ul className={styles.experienceItemInfoContainer}>
                <li className={styles.experienceListItem}><p>Solved high priority, regulatory issues critical to customers' financial success</p></li>
                <li className={styles.experienceListItem}><p>Worked on bug fixes, user interface updates, and implementing new features</p></li>
                <li className={styles.experienceListItem}><p>Performed and received regular code review for company best standards and code functionality</p></li>
                <li className={styles.experienceListItem}><p>Developed in Caché/M, VB6, C#, and Typescript</p></li>
              </ul>
            </div>
            <div className={styles.experienceItemContainer}>
              <div className={styles.experienceItemTitleContainer}>
                <h3>📙 University of Illinois at Urbana-Champaign</h3>
                <h4>Computer Science</h4>
                <h4>2016-2018</h4>
              </div>
              <ul className={styles.experienceItemInfoContainer}>
                <li className={styles.experienceListItem}><p>Graduated with a 3.44 GPA</p></li>
                <li className={styles.experienceListItem}><p>Earned a Bachelor's Degree in Computer Science</p></li>
                <li className={styles.experienceListItem}><p>Made the Dean's List Spring 2018</p></li>
                <li className={styles.experienceListItem}><p>Selected Coursework: The Art of Web Programing, User Interface Design, Tech and Advertising Campaigns, Digital Forensics, Computer Security 1, Applied Machine Learning</p></li>
              </ul>
            </div>
            <div className={styles.experienceItemContainer}>
              <div className={styles.experienceItemTitleContainer}>
                <h3>🏫 Illinois Valley Community College</h3>
                <h4>Associate of Engineering Science</h4>
                <h4>2014-2016</h4>
              </div>
              <ul className={styles.experienceItemInfoContainer}>
                <li className={styles.experienceListItem}><p>Graduated with a 3.89 GPA</p></li>
                <li className={styles.experienceListItem}><p>Earned an Associate of Engineering Science degree</p></li>
                <li className={styles.experienceListItem}><p>Received academic and/or presidential honors every semester</p></li>
                <li className={styles.experienceListItem}><p>Member of Phi Theta Kappa Honor Society and Sigma Kappa Delta Honor Society</p></li>
              </ul>
            </div>
          </div>
        </section>
        <a href='../../assets/resume.pdf' className={styles.linkContainer}>
          <h2 className={styles.linkContainerContent}>download my resume</h2>
        </a>
        <a href='mailto:nathan.killelea@gmail.com' className={styles.linkContainer}>
          <h2 className={styles.linkContainerContent}>hire me</h2>
        </a>
        <a href='https://www.linkedin.com/in/killelea/' className={styles.linkContainer}>
          <h2 className={styles.linkContainerContent}>connect with me</h2>
        </a>
      </div>
    </div>
  );
}

export default About;
