import React from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink, withRouter } from 'react-router-dom'


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


import {takeProject, completeProject} from '../actions/projectActions';




// TODO: MAKE A SEPARATE CARD/COMPONENT FOR CURRENT USER PROJECTS VS NON
// TODO: there is abug that if there is a doer_id it will still allow you to take the project / overide the d_id
const Project = (props) => {
  const { project, currentUser } = props;
  console.log("pROJECT:", props);

  if (currentUser.id === project.user_id) {
      return (
        <div>
          <h3>project {project.title}</h3>
          <h4>Posted By: {project.user_id}</h4>
          <p>{project.description}</p>
          <p>Category: {project.category}</p>
          <p>Capital: {project.base_capital}</p>
          {project.completed ? <p>Status: Completed!</p> :
            project.inprogress ? <p>Status: In Progress</p> :
            <>
            <p>Status: Available</p>
            <a>See Admin Details</a>
            </>
          }
          <button onClick={() => null}> See More Info! </button>
        </div>
      );
  } else {
    return (
      <div>
        <h3>project {project.title}</h3>
        <h4>Posted By: {project.user_id}</h4>
        <p>{project.description}</p>
        <p>Category: {project.category}</p>
        <p>Capital: {project.base_capital}</p>
        {project.completed ? <p>Status: Completed!</p> :
          project.inprogress ?
            <>
            <p>Status: In Progress</p>
            {currentUser.id === project.doer_id ?
            <button onClick={() => props.completeProject(project.id)}>Finish Project!</button>
            : null}
            </>
          :
          <>
          <p>Status: Available</p>
          <a onClick={() => props.takeProject(project.id, currentUser.id)}>Take On Project!</a>
          </>
        }
        <Link to={`/projects/${project.id}`} activeClassName="active">See MOre Info!</Link>
        <button onClick={() => props.history.push("/projects/"+project.id)}> See More Info! </button>
      </div>
    )

  }
}

const useStyles = makeStyles(theme => ({
  card: {
    width: "30%",
    maxWidth: "33%",
    margin: theme.spacing(1),
  },
  action: {
    borderTop: "1px solid red",
  },
  h3: {
    margin: 0,
  },

}));

const ProjectCard = (props) => {
  const { project, currentUser } = props;
  const classes = useStyles();

  const handleClick = event => {
    event.preventDefault();
    debugger;
    props.history.push("/projects/"+project.id);
  }

  const renderAdminDoerText = () => {
    switch (true) {
      case currentUser.id === project.user_id:
        return <Typography variant="body2">Click to update info</Typography>
      case currentUser.id === project.doer_id:
        return <Typography variant="body2">Click to update progress</Typography>
      default:
        return null;
    }
  }
  return (
    <Card className={classes.card}>
      <CardContent>
        <h3 className={classes.h3}>project {project.title}</h3>
       <p>{project.description.substring(0, 150)}...</p>
       <p>Capital: {project.total_capital}</p>
       <p>Location: {project.location}</p>
       {project.completed ? <p>Status: Completed!</p> :
         project.inprogress ? <p>Status: In Progress</p> :
         <>
         <p>Status: Available</p>
         </>
       }
       <Link component={RouterLink} to={"/users/"+project.user_id}>Posted By: {project.user.name}</Link>
      </CardContent>
      <CardActions className={classes.action}>
        <Button onClick={handleClick} size="small">More Info</Button>
        {renderAdminDoerText()}
      </CardActions>
    </Card>
  );


}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user
  };
}

export default withRouter(connect(mapStateToProps, { takeProject, completeProject })(ProjectCard))
// export default connect(mapStateToProps, { takeProject, completeProject })(Project)
