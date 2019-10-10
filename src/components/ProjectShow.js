import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {contributeCapital, completeProject, takeProject} from '../actions/projectActions';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import BubbleChart from '@material-ui/icons/BubbleChart';
import Vignette from '@material-ui/icons/Vignette';


const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    margin: "0 auto",
    textAlign: "left",
    },
  action: {
    borderTop: "1px solid red",
  },
  h3: {
    marginBottom: theme.spacing(1),
  },
  card: {
    margin: theme.spacing(2),
  },
  chip: {
    margin: theme.spacing(1),
  },
  grid: {
    flexGrow: 1,
  },

}));

const PROJECTS_ENDPOINT = "http://localhost:3000/api/v1/projects";

const ProjectShow = (props) => {
  // TODO: allow a user to get this page without going through the app.

  const [contribute, setContribute] = useState({active: false, amount: 0});
  const [project, setProject] = useState({});

  useEffect(() => {
    if (props.project) {
      setProject(props.project);

      debugger;
    } else {

      console.log("in else");

      const token = localStorage.getItem("token");
      fetch(PROJECTS_ENDPOINT+"/"+props.match.params.id,
      {
        headers:{
          'Content-Type': 'application/json',
          Authorization: token
        }
      })
      .then(resp => resp.json())
      .then(data => {
        console.log("hahahaha");
        setProject(data);
      })
    }
  }, []);

  const classes = useStyles();
  const { currentUser } = props;

  const handleContributionSubmit = (event) => {
    event.preventDefault();
    props.contributeCapital(event.target.contribution.value, project.id, currentUser.id);
    event.target.reset();
  }

  const handleAmountChange = (event) => setContribute({...contribute, amount: Number(event.target.value)});

  const handleContributeClick = event => setContribute({...contribute, active: !contribute.active});

  const handleCompleteClick = (event) => {
    event.preventDefault();
    props.completeProject(project.id);
  }

  const handleTakeOnClick = (event) => {
    event.preventDefault();
    props.takeProject(project.id, currentUser.id);
  }

  const renderProjectCTA = () => {
    if (project.doer_id) {
      return <Button fullWidth onClick={handleCompleteClick}>Complete Project</Button>;
    } else {
      return <Button fullWidth onClick={handleTakeOnClick}>Take On Project</Button>;
    }
  }

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h3">
            {project.title}
          </Typography>
          <Typography color="textSecondary">
            Location: {project.location}
          </Typography>
          <Chip variant="outlined" className={classes.chip} color="yellow" label={"Status: "+ (project.completed ? "Completed" :
            project.inprogress ? "In Progress" : "Available") } />
          <Chip variant="outlined" className={classes.chip} color="secondary" icon={<BubbleChart />} label={project.total_capital + " Capital"} />
          <Chip variant="outlined" className={classes.chip} color="primary" icon={<Vignette />} label={"Category: " + project.category} />
          <Typography paragraph>
            {project.description}
          </Typography>

          <Typography>
            <FaceIcon /> Posted By: {project.user ? project.user.name : null}
          </Typography>
        </CardContent>
      </Card>

      {project.completed ? null :
        <Card className={classes.card}>
          <CardContent>
          <Grid container>
            <Grid item xs={6}>
            <Button fullWidth onClick={handleContributeClick}>{ contribute.active ? "Finish Up": "Contribute Capital!"}</Button>
            <Collapse in={contribute.active}>
              <form onSubmit={handleContributionSubmit}>
                <TextField
                  id="contribtion"
                  label="Contribution Amount"
                  name="contribution"
                  onChange={handleAmountChange}
                  type="number"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    min: "0",
                    max: `${currentUser.capital}`
                  }}
                  fullWidth
                  margin="normal"
                />
              <Button type="submit" size="large" fullWidth>Contribute!</Button>
              </form>
            </Collapse>
            </Grid>
            <Grid item xs={6}>
              {renderProjectCTA()}
            </Grid>
          </Grid>

          </CardContent>
        </Card>
      }
    </div>

  );

}


export default connect((state) => ({currentUser: state.user}), {contributeCapital, completeProject, takeProject})(ProjectShow)
