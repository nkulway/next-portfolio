import Image from "next/image";
import dummyImage from "../public/profilePicture.jpeg";
import projectObj from "../public/projects.js";

const ProjectCard = () => {

  return (
    <section>
      {projectObj.map((projects) => (
        <li key={projects.id}>{projects.title}</li>
      ))}
      <Image alt='Project Card' src={dummyImage} width={200} height={200} />
      <div>
        <h2></h2>
      </div>
    </section>
  );
};

export default ProjectCard;
