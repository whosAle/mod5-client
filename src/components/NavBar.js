import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {

  return (
    <nav>
      <div class="nav-wrapper">
        <NavLink to="/" exact>The Good Economy Project</NavLink>
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/about" exact>About</NavLink>
        <NavLink to="/login" exact>Login</NavLink>
        <a href="#" class="">The Good Economy Project</a>
        <ul id="" class="">
          <li><a href="#">New Project</a></li>
          <li><a href="#">Explore</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Sign Up</a></li>
        </ul>
      </div>
    </nav>
  );
}
