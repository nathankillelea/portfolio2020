import React, {useState} from 'react';
import styles from './About.module.css';
import SharedStyles from '../SharedStyles.module.css';
import Ticker from 'react-ticker';
import PageVisibility from 'react-page-visibility';

const About = () => {
  const [pageIsVisible, setPageIsVisible] = useState(true)
 
  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible)
  }

  return (
    <PageVisibility onChange={handleVisibilityChange}>
      <div id={SharedStyles.container}>
        <div id={styles.body}>
          <section id={styles.aboutContainer}>
            <div className={styles.imageContainer}>
              <img src='../../assets/nathan_killelea.jpg' className={`${styles.img} ${styles.selectionText}`} alt='Nathan Killelea' />
            </div>
            <div id={styles.aboutTextContainer}>
              <h2 id={styles.aboutHeader} className={styles.selectionText}>Hey, I'm Nathan Killelea.</h2>
              <p className={styles.selectionText} style={{paddingTop: '24px'}}>I am a software developer with a passion for all things web. I am a graduate from the College of Engineering at the University of Illinois at Urbana-Champaign.</p>
              <p className={styles.selectionText} style={{paddingTop: '24px'}}>I love using modern frameworks and technologies to create simple, elegant web solutions. I am always learning and trying to improve my skills as a developer. I may not know everything, but I am uniquely determined and capable of figuring out creative solutions to any problem that I come across.</p>
              <p className={styles.selectionText} style={{paddingTop: '24px'}}>I am currently open to full-time, part-time, or freelance opportunities.</p>
            </div>
          </section>
          <section id={styles.skillsContainer}>
            <div id={styles.skillsHeaderContainer}>
              <h2 id={styles.skillsHeader} className={styles.selectionText}>Skills <span style={{color: '#d3d3d3', fontWeight: '900'}} className={styles.selectionText}>and Technologies</span></h2>
            </div>
            <div id={styles.skillsColumnContainer}>
              <div id={styles.rowOne}>
                <h3 className={`${styles.skillsSubheaderText} ${styles.selectionText}`} style={{paddingTop: 0}}>Languages</h3>
                <ul className={styles.skillsListRow}>
                  <li className={styles.skillsItemContainer}>
                    <div className={styles.skillsItem}>
                      <div className={styles.logoContainer}>
                        <img src='../../assets/logos/HTML5.png' className={`${styles.logo} ${styles.selectionText}`} alt='HTML5 Logo' />
                      </div>
                      <p className={styles.selectionText}>HTML5</p>
                    </div>
                  </li>
                  <li className={styles.skillsItemContainer}>
                    <div className={styles.skillsItem}>
                      <div className={styles.logoContainer}>
                        <img src='../../assets/logos/CSS3.png' className={`${styles.logo} ${styles.selectionText}`} alt='CSS3 Logo' />
                      </div>
                      <p className={styles.selectionText}>CSS3</p>
                    </div>
                  </li>
                  <li className={styles.skillsItemContainer}>
                    <div className={styles.skillsItem}>
                      <div className={styles.logoContainer}>
                        <img src='../../assets/logos/C.png' className={`${styles.logo} ${styles.selectionText}`} alt='C Logo' />
                      </div>
                      <p className={styles.selectionText}>C</p>
                    </div>
                  </li>
                  <li className={styles.skillsItemContainer}>
                    <div className={styles.skillsItem}>
                      <div className={styles.logoContainer}>
                      <img src='../../assets/logos/Haskell.png' className={`${styles.logo} ${styles.selectionText}`} alt='Haskell Logo' />
                      </div>
                      <p className={styles.selectionText}>Haskell</p>
                    </div>
                  </li>
                  <li className={styles.skillsItemContainer}>
                    <div className={styles.skillsItem}>
                      <div className={styles.logoContainer}>
                        <img src='../../assets/logos/Java.png' className={`${styles.logo} ${styles.selectionText}`} alt='Java Logo' />
                      </div>
                      <p className={styles.selectionText}>Java</p>
                    </div>
                  </li>
                  <li className={styles.skillsItemContainer}>
                    <div className={styles.skillsItem}>
                      <div className={styles.logoContainer}>
                        <img src='../../assets/logos/JavaScript.png' className={`${styles.logo} ${styles.selectionText}`} alt='Javascript Logo' />
                      </div>
                      <p className={styles.selectionText}>Javascript</p>
                    </div>
                  </li>
                  <li className={styles.skillsItemContainer}>
                    <div className={styles.skillsItem}>
                      <div className={styles.logoContainer}>
                        <img src='../../assets/logos/Python.png' className={`${styles.logo} ${styles.selectionText}`} alt='Python Logo' />
                      </div>
                      <p className={styles.selectionText}>Python</p>
                    </div>
                  </li>
                  <li className={styles.skillsItemContainer}>
                    <div className={styles.skillsItem}>
                      <div className={styles.logoContainer}>
                        <img src='../../assets/logos/R.png' className={`${styles.logo} ${styles.selectionText}`} alt='R Logo' />
                      </div>
                      <p className={styles.selectionText}>R</p>
                    </div>
                  </li>
                  <li className={styles.skillsItemContainer}>
                    <div className={styles.skillsItem}>
                      <div className={styles.logoContainer}>
                        <img src='../../assets/logos/Ruby.png' className={`${styles.logo} ${styles.selectionText}`} alt='Ruby Logo' />
                      </div>
                      <p className={styles.selectionText}>Ruby</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div id={styles.rowTwo}>
                <h3 className={`${styles.skillsSubheaderText} ${styles.selectionText}`}>Frameworks/Libraries</h3>
                <ul className={styles.skillsListRow}>
                  <li className={styles.skillsItemContainer}>
                    <div className={styles.skillsItem}>
                      <div className={styles.logoContainer}>
                        <img src='../../assets/logos/React.png' className={`${styles.logo} ${styles.selectionText}`} alt='React Logo' />
                      </div>
                      <p className={styles.selectionText}>React</p>
                    </div>
                  </li>
                  <li className={styles.skillsItemContainer}>
                    <div className={styles.skillsItem}>
                      <div className={styles.logoContainer}>
                        <img src='../../assets/logos/Redux.png' className={`${styles.logo} ${styles.selectionText}`} alt='Redux Logo' />
                      </div>
                      <p className={styles.selectionText}>Redux</p>
                    </div>
                  </li>
                  <li className={styles.skillsItemContainer}>
                    <div className={styles.skillsItem}>
                      <div className={styles.logoContainer}>
                        <img src='../../assets/logos/React.png' className={`${styles.logo} ${styles.selectionText}`} alt='React Logo' />
                      </div>
                      <p className={styles.selectionText}>React Native</p>
                    </div>
                  </li>
                  <li className={styles.skillsItemContainer}>
                    <div className={styles.skillsItem}>
                      <div className={styles.logoContainer}>
                        <img src='../../assets/logos/Node.png' className={`${styles.logo} ${styles.selectionText}`} alt='Node Logo' />
                      </div>
                      <p className={styles.selectionText}>Express</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div id={styles.rowThree}>
                <h3 className={`${styles.skillsSubheaderText} ${styles.selectionText}`}>Web Technologies</h3>
                <ul className={styles.skillsListRow}>
                  <li className={styles.skillsItemContainer}>
                    <div className={styles.skillsItem}>
                      <div className={styles.logoContainer}>
                        <img src='../../assets/logos/Git.png' className={`${styles.logo} ${styles.selectionText}`} alt='Git Logo' />
                      </div>
                      <p className={styles.selectionText}>Git</p>
                    </div>
                  </li>
                  <li className={styles.skillsItemContainer}>
                    <div className={styles.skillsItem}>
                      <div className={styles.logoContainer}>
                        <img src='../../assets/logos/Subversion.png' className={`${styles.logo} ${styles.selectionText}`} alt='Subversion Logo' />
                      </div>
                      <p className={styles.selectionText}>Subversion</p>
                    </div>
                  </li>
                  <li className={styles.skillsItemContainer}>
                    <div className={styles.skillsItem}>
                      <div className={styles.logoContainer}>
                        <img src='../../assets/logos/Node.png' className={`${styles.logo} ${styles.selectionText}`} alt='Node Logo' />
                      </div>
                      <p className={styles.selectionText}>Node</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div id={styles.rowFour}>
                <h3 className={`${styles.skillsSubheaderText} ${styles.selectionText}`}>Databases</h3>
                <ul className={styles.skillsListRow}>
                  <li className={styles.skillsItemContainer}>
                    <div className={styles.skillsItem}>
                      <div className={styles.logoContainer}>
                        <img src='../../assets/logos/Firebase.png' className={`${styles.logo} ${styles.selectionText}`} alt='Firebase Logo' />
                      </div>
                      <p className={styles.selectionText}>Firebase Cloud Firestore</p>
                    </div>
                  </li>
                  <li className={styles.skillsItemContainer}>
                    <div className={styles.skillsItem}>
                      <div className={styles.logoContainer}>
                        <img src='../../assets/logos/MongoDB.png' className={`${styles.logo} ${styles.selectionText}`} alt='MongoDB Logo' />
                      </div>
                      <p className={styles.selectionText}>MongoDB</p>
                    </div>
                  </li>
                  <li className={styles.skillsItemContainer}>
                    <div className={styles.skillsItem}>
                      <div className={styles.logoContainer}>
                        <img src='../../assets/logos/MySQL.png' className={`${styles.logo} ${styles.selectionText}`} alt='MySQL Logo' />
                      </div>
                      <p className={styles.selectionText}>MySQL</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section id={styles.experienceContainer}>
            <div id={styles.experienceHeaderContainer}>
              <h2 id={styles.experienceHeader}><span style={{color: '#3f3f3f', fontWeight: '900'}}>Experience</span> and Education</h2>
            </div>
            <div id={styles.experienceContentContainer}>
              <div className={styles.experienceItemContainer}>
                <div className={styles.experienceItemTitleContainer}>
                  <span className={styles.experienceItemTitleRow} style={{color: '#3f3f3f', marginBottom: '8px'}}><img src='../../assets/laptop.svg' className={styles.experienceItemIconLarge} alt='laptop' /><h3 className={styles.experienceItemSubtitle}>Epic Systems</h3></span>
                  <span className={styles.experienceItemTitleRow} style={{color: '#3f3f3f', marginBottom: '4px'}}><img src='../../assets/bust_in_silhouette.svg' className={styles.experienceItemIconSmall} alt='bust in silhouette' /><h4>Software Developer</h4></span>
                  <span className={styles.experienceItemTitleRow} style={{color: '#3f3f3f'}}><img src='../../assets/calendar_spiral.svg' className={styles.experienceItemIconSmall} alt='calendar' /><h4>2018 - 2019</h4></span>
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
                  <span className={styles.experienceItemTitleRow} style={{color: '#3f3f3f', marginBottom: '8px'}}><img src='../../assets/yellow_book.svg' className={styles.experienceItemIconLarge} alt='book' /><h3 className={styles.experienceItemSubtitle}>UIUC</h3></span>
                  <span className={styles.experienceItemTitleRow} style={{color: '#3f3f3f', marginBottom: '4px'}}><img src='../../assets/bust_in_silhouette.svg' className={styles.experienceItemIconSmall} alt='bust in silhouette' /><h4>Computer Science</h4></span>
                  <span className={styles.experienceItemTitleRow} style={{color: '#3f3f3f'}}><img src='../../assets/calendar_spiral.svg' className={styles.experienceItemIconSmall} alt='calendar' /><h4>2016 - 2018</h4></span>
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
                  <span className={styles.experienceItemTitleRow} style={{color: '#3f3f3f', marginBottom: '8px'}}><img src='../../assets/school.svg' className={styles.experienceItemIconLarge} alt='school' /><h3 className={styles.experienceItemSubtitle}>IVCC</h3></span>
                  <span className={styles.experienceItemTitleRow} style={{color: '#3f3f3f', marginBottom: '4px'}}><img src='../../assets/bust_in_silhouette.svg' className={styles.experienceItemIconSmall} alt='bust in silhouette' /><h4>A.E.S.</h4></span>
                  <span className={styles.experienceItemTitleRow} style={{color: '#3f3f3f'}}><img src='../../assets/calendar_spiral.svg' className={styles.experienceItemIconSmall} alt='calendar' /><h4>2014 - 2016</h4></span>
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
          <section id={styles.linksContainer}>
            <a href='../../assets/resume.pdf' className={styles.link} style={{flex: '1 1 auto'}}>
              <div className={styles.linkContainer} style={{backgroundColor: '#ededed'}}>
                {pageIsVisible && (
                  <Ticker speed='6'>
                    {() => (
                      <span className={styles.linkContainerContent}>download my resume<img src='../../assets/curled_page.svg' className={styles.linkIcon} alt='curled page' /><span id={styles.spacerOne}>Ss</span></span>
                    )}
                  </Ticker>
                )}
              </div>
            </a>
            <a href='mailto:nathan.killelea@gmail.com' className={styles.link} style={{flex: '1 1 auto'}}>
              <div className={styles.linkContainer} style={{backgroundColor: '#6c6c6c', color: '#fff'}}>
                {pageIsVisible && (
                  <Ticker speed='3'>
                    {() => (
                      <span className={styles.linkContainerContent}>hire me<img src='../../assets/mailbox.svg' className={styles.linkIcon} alt='mailbox' /></span>
                    )}
                  </Ticker>
                )}
              </div>
            </a>
            <a href='https://www.linkedin.com/in/killelea/' className={styles.link} style={{flex: '1 1 auto'}} target='_blank' rel='noopener noreferrer'>
              <div className={styles.linkContainer} style={{backgroundColor: '#292929', color: '#fff'}}>
                {pageIsVisible && (
                  <Ticker speed='6'>
                    {() => (
                      <span className={styles.linkContainerContent}>connect with me<img src='../../assets/handshake_hmn_k3.svg' className={styles.linkIcon} alt='handshake' /><span id={styles.spacerTwo}>Ss</span></span>
                    )}
                  </Ticker>
                )}
              </div>
            </a>
          </section>
        </div>
      </div>
    </PageVisibility>
  );
}

export default About;
