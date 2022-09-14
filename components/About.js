import React, { forwardRef } from "react";
import aboutStyles from '../styles/About.module.css'

// eslint-disable-next-line react/display-name
const About = forwardRef((_props, aboutRef) => {
  return (
    <div ref={aboutRef} id='about-section'>
      <div className={aboutStyles.aboutContainer}>
        <div className={aboutStyles.aboutContent}>
          <h1>Nick Kulway</h1>
          <p>
            Creative problem solver who loves working with others to build
            things for the internet. <br /> Software development has become a
            pivotal part of my life, I love honing my craft and learning new
            methods to write great code.
          </p>
        </div>
        <div className={aboutStyles.aboutDesign}>
          
        </div>
      </div>
    </div>
  );
});

export default About;
