import React from "react";

const ProjectItem = ({ image, name }) => {
  return (
    <div className="projectItem">
      <div className="bgImage" style={{ backgroundImage: `url(${image})` }} />
      <h1>{name}</h1>
    </div>
  );
};

export default ProjectItem;
