import React from 'react';

import Project from './Project';


const ProjectList = (props) => {
  console.log("explore props:", props);

  const renderProjects = () => props.projects.map(project => <Project project={project} key={project.id}/>)

  return (
    <div>
      <h2>Project List! </h2>
      {renderProjects()}
    </div>
  );
}

export default ProjectList;
