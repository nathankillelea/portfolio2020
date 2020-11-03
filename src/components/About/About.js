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
            <p className={styles.selectionText}>I am a software developer with a passion for all things web. I am a graduate from the College of Engineering at the University of Illinois at Urbana-Champaign.</p>
            <p className={styles.selectionText} style={{paddingTop: '24px'}}>I love using modern frameworks and technologies to create simple, elegant web solutions. I am always learning and trying to improve my skills. I approach .. lorem ipsum askdfasdfjasl;dfjl;asjdf;;;;; ;asd fasd;flkj; asdf;lkj;lasdjfl;asdl;fjla;sdjfljasldjf</p>
            <p className={styles.selectionText} style={{paddingTop: '24px'}}>I am currently open to full-time, part-time, or freelance opportunities.</p>
          </div>
        </section>
        <section id={styles.skillsContainer}>
          <h2 id={styles.skillsHeader} className={styles.selectionText}>Skills</h2>
          <div id={styles.skillsColumnContainer}>
            <div className={`${styles.skillsColumn} ${styles.skillsColumnLeft}`}>
              <h3 className={`${styles.skillsSubheaderText} ${styles.selectionText}`}>Languages</h3>
              <ul>
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
                    <img src='../../assets/logos/Firebase.png' className={styles.logo} />
                  </div>
                  <p className={styles.selectionText}>Firebase</p>
                </li>
                <li className={styles.skillsItem}>
                  <div className={styles.logoContainer}>
                    <img src='../../assets/logos/Firebase.png' className={styles.logo} />
                  </div>
                  <p className={styles.selectionText}>Cloud Firestore</p>
                </li>
                <li className={styles.skillsItem}>
                  <div className={styles.logoContainer}>
                    <img src='../../assets/logos/MongoDB.png' className={styles.logo} />
                  </div>
                  <p className={styles.selectionText}>MongoDB</p>
                </li>
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
                    <img src='../../assets/logos/Node.png' className={styles.logo} />
                  </div>
                  <p className={styles.selectionText}>Node</p>
                </li>
                <li className={styles.skillsItem}>
                  <div className={styles.logoContainer}>
                    <img src='../../assets/logos/MySQL.png' className={styles.logo} />
                  </div>
                  <p className={styles.selectionText}>MySQL</p>
                </li>
              </ul>
            </div>
            <div className={`${styles.skillsColumn} ${styles.skillsColumnRight}`}>
              <h3 className={`${styles.skillsSubheaderText} ${styles.selectionText}`}>eggman</h3>
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
