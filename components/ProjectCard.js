import Image from "next/image";
import dummyImage from "../public/profilePicture.jpeg";
import projectObj from "../public/projects.js";

const ProjectCard = () => {
  return (
    <>
      {projectObj.map((projects) => (
        <section key={projects.id}>
          <Image alt='Project Card' src={dummyImage} width={200} height={200} />
          <div>
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
