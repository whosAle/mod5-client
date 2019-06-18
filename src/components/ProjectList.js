import React from 'react';

import Project from './Project';
import ProjectCard from './ProjectCard';


const ProjectList = (props) => {
  console.log("explore props:", props);

  const renderProjects = () => props.projects.map(project => <ProjectCard project={project} key={project.id}/>)

  return (
    <div>
      <h2>Project List! </h2>
      {renderProjects()}
    </div>
  );
}

export default ProjectList;
