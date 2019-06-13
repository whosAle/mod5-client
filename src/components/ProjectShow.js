import React, { useState } from 'react';

const ProjectShow = (props) => {
  console.log("profile", props);
  const { project } = props;

  return (
    <div>
      <h2>{project.title}</h2>
      <div id="project-deets">
        <span>Category: {project.category}</span>
        <span>Capital: {project.capital}</span>
        <span>Status: {project.completed ? "Completed" :
          project.inprogress ? "In Progress" : "Available"}</span>
      </div>
      <p>Location: {project.location}</p>
      <p>{project.description}</p>

      <p>Posted By: {project.user_id}</p>
      <button>Back</button>
      <button>{project.doer_id ? "Complete Project" : "Take On Project"}</button>

    </div>

  );

}



export default ProjectShow
