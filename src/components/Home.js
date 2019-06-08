import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TypeWriter from 'react-typewriter';

import '../css/home.css';

const displayActionButtons = () => {
  return (
    <>
    <Link to="/projects/new">Add A Project</Link>
    <Link to="/explore">Explore</Link>
    </>);
}


const Home = () => {
  const [typing, setTyping] = useState(true);

  return (
    <div id="homepage">
      <div>
        <TypeWriter typing={1} onTypingEnd={() => setTyping(false)}> What if you could get paid to do good? </TypeWriter>
      </div>
      {typing ? null : displayActionButtons()}

    </div>
  )
}

export default Home
