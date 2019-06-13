import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {takeProject, completeProject} from '../actions/projectActions';


// TODO: MAKE A SEPARATE CARD/COMPONENT FOR CURRENT USER PROJECTS VS NON
// TODO: there is abug that if there is a doer_id it will still allow you to take the project / overide the d_id
const Project = (props) => {
  const { project, currentUser } = props;
  console.log("pROJECT:", props);

  if (currentUser.id === project.user_id) {
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
            <a>See Admin Details</a>
            </>
          }
          <button onClick={() => null}> See More Info! </button>
        </div>
      );
  } else {
    return (
      <div>
        <h3>project {project.title}</h3>
        <h4>Posted By: {project.user_id}</h4>
        <p>{project.description}</p>
        <p>Category: {project.category}</p>
        <p>Capital: {project.base_capital}</p>
        {project.completed ? <p>Status: Completed!</p> :
          project.inprogress ?
            <>
            <p>Status: In Progress</p>
            {currentUser.id === project.doer_id ?
            <button onClick={() => props.completeProject(project.id)}>Finish Project!</button>
            : null}
            </>
          :
          <>
          <p>Status: Available</p>
          <a onClick={() => props.takeProject(project.id, currentUser.id)}>Take On Project!</a>
          </>
        }
        <Link to={`/projects/${project.id}`} activeClassName="active">See MOre Info!</Link>
        <button onClick={() => props.history.push("/projects/"+project.id)}> See More Info! </button>
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user
  };
}

export default connect(mapStateToProps, { takeProject, completeProject })(Project)


// t.integer "user_id"
// t.integer "base_capital"
// t.string "location"
// t.string "title"
// t.string "description"
// t.string "category"
// t.boolean "completed"
// t.boolean "inprogress"
