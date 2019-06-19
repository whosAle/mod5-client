import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';

import TypeWriter from 'react-typewriter';

import '../css/home.css';



const useStyles = makeStyles(theme => ({
  button: {
    fontFamily: "'Amatic SC', cursive",
    fontSize: "30px",
    margin: theme.spacing(2),
    fontWight: "20px",
  },

}));

const Home = (props) => {
  const classes = useStyles();
  const [typing, setTyping] = useState(true);

  const handleClick = (event, route) => {
    event.preventDefault();
    debugger;
    switch (route) {
      case "projects":
        props.history.push("/projects/new");
        break;
      case "explore":
        props.history.push("explore");
        break;
    }
  }

  const displayActionButtons = () => {
    return (
      <>
      <Zoom in={true} timeout={2000}>
        <Button onClick={event => handleClick(event, "projects")} id="projects" size="large" color="default" className={classes.button}>Add A Project</Button>
      </Zoom>
      <Zoom in={true} timeout={2000}>
        <Button onClick={event => handleClick(event, "explore")} id="explore" size="large" color="default" className={classes.button}>Explore</Button>
      </Zoom>
      </>
    );
  }

  return (
    <div id="homepage">
      <div>
        <h1><TypeWriter typing={1} onTypingEnd={() => setTyping(false)}> What if you could get paid to do Good? </TypeWriter></h1>
      </div>
      <div>
        {typing ? null : displayActionButtons()}
      </div>
    </div>
  )
}

export default Home
