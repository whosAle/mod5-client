import React, { useState, useEffect } from 'react';
import ProjectList from './ProjectList';

const USER_ENDPOINT = "http://localhost:3000/api/v1/users/";


const Profile = (props) => {
  const [user, setUser] = useState({});


  useEffect(() => {
    // Update the document title using the browser API
    fetch(USER_ENDPOINT+props.userId)
      .then(resp => resp.json())
      .then(data => {
        setUser(data);
        console.log("done fetch user", user);
      })
    }, [user]
  );

  console.log(user);

  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <h2>Capital</h2>
      <p>{user.capital}</p>

    </div>

  );

}

export default Profile
