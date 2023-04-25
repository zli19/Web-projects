import React from "react";
import ProjectItem from "../components/ProjectItem";
import { projectList } from "../helpers/ProjectList";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {projectList.map((project) => {
          return <ProjectItem image={project.image} name={project.name} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
