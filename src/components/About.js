import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root:{
    margin: theme.spacing(2),
  },
  space:{
    marginBottom: theme.spacing(4),
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.space}>
        About The Good Economy Project
      </Typography>

      <Typography variant="h6">
        Mission
      </Typography>

      <Typography paragraph variant="body1" className={classes.space}>
        Our mission is to encourage good deeds throughout our communities by empowering and incentivising everyone to do what they can to ensure a brighter future.
      </Typography>

      <Typography variant="h6">
        What We Do
      </Typography>

      <Typography paragraph variant="body1" className={classes.space}>
        What if you could get paid to do good? The Good Economy Project is an experimental marketplace for good deeds. Through every project you take on, you know you are doing something to effect your community for the better. By completing a project, you gain Social Capital which you can use to fuel more projects within your community or cash them out.
      </Typography>
    </div>

  )
}

export default About
