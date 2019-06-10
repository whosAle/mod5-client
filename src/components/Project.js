import React from 'react';
import { connect } from 'react-redux';

import {takeProject} from '../actions/projectActions';


const Project = (props) => {
  const { project } = props;
  console.log("pROJECT:", props);

  return (
    <div>
      <h3>project {project.title}</h3>
      <h4>Posted By: {project.user_id}</h4>
      <p>{project.description}</p>
      <p>Category: {project.category}</p>
      <p>Capital: {project.base_capital}</p>
      {project.completed ? <p>Status: Completed!</p> :
        project.inprogress ? <p>Status: In Progress</p> :
        <>
        <p>Status: Available</p>
        <a onClick={() => props.takeProject(project.id, props.user.id)}>Take On Project!</a>
        </>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, {takeProject})(Project)


// t.integer "user_id"
// t.integer "base_capital"
// t.string "location"
// t.string "title"
// t.string "description"
// t.string "category"
// t.boolean "completed"
// t.boolean "inprogress"
