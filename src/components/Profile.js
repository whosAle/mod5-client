import React, { useState } from 'react';

import ProjectList from './ProjectList';

const Profile = (props) => {
  console.log("profile", props);

  return (
    <div>
      <h1>USER PROFILE PAGE</h1>
      <h2>Capital</h2>
      <p>{props.user.capital}</p>
      <h2>Current User Projects</h2>
      <ProjectList projects={props.currentProjects}/>

    </div>

  );

}

export default Profile
