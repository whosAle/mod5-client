import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import {logOutUser} from '../actions/userActions';


function NavBar(props) {

  console.log(localStorage.getItem("token"));

  return (
    <nav>
      <div className="nav-wrapper">
        <NavLink to="/" exact>The Good Economy Project</NavLink>
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/about" exact>About</NavLink>
        { localStorage.getItem("token") ?
        <>
        <NavLink to="/login" exact>Login</NavLink>
        <NavLink to="/signup" exact>Sign Up</NavLink>
        </>
        :
        <a onClick={() => props.logOutUser()}>LogOut</a>

        }
        <a href="#" className="">The Good Economy Project</a>
        <ul id="" className="">
          <li><a href="#">New Project</a></li>
          <li><a href="#">Explore</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Sign Up</a></li>
        </ul>

      </div>
    </nav>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loginUser: userData => dispatch(loginUser(userData))
//   };
// }

export default connect(null, {logOutUser})(NavBar)
