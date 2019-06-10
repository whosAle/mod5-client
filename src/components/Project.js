import React from 'react';


const Project = (props) => {
  const { project } = props;
  console.log("pROJECT:", props);

  return (
    <div>
      <h3>project {project.id}</h3>
      <p>{project.description}</p>
      <p>{project.base_capital}</p>
    </div>
  );
}

export default Project
