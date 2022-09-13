import React, { forwardRef } from "react";
import expStyles from '../styles/Experience.module.css'

// eslint-disable-next-line react/display-name
const Experience = forwardRef((_props, experienceRef) => {
  return (
    <div ref={experienceRef}>
      <div className={expStyles.expContainer}>
        <div className={expStyles.expContent}>
          <h1>Experience</h1>
          <p>Here is going to be some of my experiece.</p>
          <h1>Amesite | Jr Software Developer</h1>
          <p>
            Work in an agile environment delivering a cloud-based platform and
            content creation services for business and university-delivered
            education and upskilling.
          </p>
        </div>
      </div>
    </div>
  );
});

export default Experience;
