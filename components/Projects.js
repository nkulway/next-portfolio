import React, { forwardRef } from "react";
import projectStyles from "../styles/Projects.module.css";
import ProjectCard from "./ProjectCard";

// eslint-disable-next-line react/display-name
const Projects = forwardRef((_props, projectRef) => {
  return (
    <div ref={projectRef}>
      <div className={projectStyles.projectContainer}>
        <div className={projectStyles.projectContent}>
          <h1>Projects</h1>
          <p>Check out some of the stuff that Ive made</p>
          <div className={projectStyles.cardSection}>
            <div className={projectStyles.cardContainer}>
              <div className={projectStyles.firstCard}>
                <ProjectCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Projects;
