import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Project from './Project';
import ProjectCard from './ProjectCard';

const useStyles = makeStyles(theme => ({
  grid: {
    textAlign: "left",
  },

}));

const ProjectList = (props) => {
  console.log("explore props:", props);
  const classes = useStyles();

  const renderProjects = () => props.projects.map(project => <ProjectCard project={project} key={project.id}/>)

  return (
    <div>
      <Grid container direction="row" justify="space-evenly" alignContent="flex-start" className={classes.grid}>
        {renderProjects()}
      </Grid>
    </div>
  );
}

export default ProjectList;
