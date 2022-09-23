/* eslint-disable react/display-name */
import mainStyles from "../styles/Main.module.css";
import React, { forwardRef, useRef } from "react";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import profileImage from "../public/profilePicture.jpeg";

const Main = forwardRef((_props, ref) => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const handleClickToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickToExperience = () => {
    experienceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickToProjects = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { ref1, ref2, ref3, ref4 } = ref;
  return (
    <main className={mainStyles.main}>
      {/* <div className={styles.navParent}>
        <div className={styles.navContainer}>
          <nav className={styles.nav}>
            <div className={styles.lineContainer}>
              <div className={styles.navLinks}>
                <div className={styles.imageWrapper}>
                  <Image
                    className={styles.avatar}
                    src={profileImage}
                    alt='A picture of Nick Kulway'
                  />
                </div>
                <ul className={styles.linkContainer}>
                  <li onClick={handleClickToAbout}>About</li>
                  <li onClick={handleClickToExperience}>Experience</li>
                  <li onClick={handleClickToProjects}>Projects</li>
                  <li onClick={handleClickToContact}>Contact</li>
                </ul>
              </div>
              <div className={styles.greenLine}></div>
              <div className={styles.metalLine}></div>
            </div>
          </nav>
        </div>
      </div> */}
      <div className={mainStyles.mainContent}>
        <About ref={ref1} id='about' />
        <Experience ref={ref2} />
        <div className={mainStyles.cardContainer}>
          <Projects ref={ref3} />
        </div>
        <Contact ref={ref4} />
      </div>
    </main>
  );
});

export default Main;
