import Image from "next/image";
import dummyImage from "../public/profilePicture.jpeg";
import projectObj from "../public/projects.js";
import projectStyles from "../styles/Projects.module.css";

const ProjectCard = () => {
  return (
    <>
      {projectObj.map((projects) => (
        <section key={projects.id} className={projectStyles.cardContainer}>
          <Image alt='Project Card' src={dummyImage} width={200} height={200} />
          <div className={projectStyles.cardContent}>
            <h2>{projects.title}</h2>
            <p>{projects.heading}</p>
            <p>{projects.description}</p>
          </div>
        </section>
      ))}
    </>
  );
};

export default ProjectCard;
