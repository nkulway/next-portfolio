/* eslint-disable react/display-name */
import About from "./About";
import React, { forwardRef, useRef } from "react";
import Contact from "./Contact";
import Projects from "./Projects";
import mainStyles from "../styles/Main.module.css";
import Experience from "./Experience";

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
