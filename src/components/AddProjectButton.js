import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import {loginUser} from '../actions/userActions';

const useStyles = makeStyles(theme => ({
  root:{
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const AddProjectButton = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        component={RouterLink}
        to="/project/new"
        className={classes.button}
        size="large"
        >Create New Project
      </Button>
    </div>
  )
}


export default AddProjectButton

// <Link component={RouterLink} to={"/users/"+project.user_id}>Posted By: {project.user.name}</Link>
