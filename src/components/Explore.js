import React from 'react';
import { connect } from 'react-redux';

import ProjectList from './ProjectList';



const Explore = (props) => {
  console.log("explore props:", props);
  debugger;
  return (
    <div>
      <h1>See All Projects </h1>
      <ProjectList projects={props.projects}/>
    </div>
  );
}

export default connect(state => ({projects: state.projects}))(Explore)
