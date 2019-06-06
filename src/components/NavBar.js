import React from 'react';

export default function NavBar() {
  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(0);

  return (
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">The Good Economy Project</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#">New Project</a></li>
          <li><a href="#">Explore</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Sign Up</a></li>
        </ul>
      </div>
    </nav>
  );
}
